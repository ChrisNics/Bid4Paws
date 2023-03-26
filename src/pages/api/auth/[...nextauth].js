import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        await dbConnect();
        const user = await User.findOne({ username }).select('+password');

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const isPasswordValid = await user.checkPassword(password, user.password);

          if (!isPasswordValid) {
            // Return an error message if the password is invalid
            throw new Error('Invalid password');
          }
          return user;
        } else {
          // Return an error message if the user is not found
          throw new Error('User not found');
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.id = user._id;
      }
      return token;
    },

    session: ({ session, user, token }) => {
      session.id = token.id;
      return session;
    }
  },

  pages: {
    signin: '/signin'
    // signOut: '/signout',
    // error: '/error', // Error code passed in query string as ?error=
    // verifyRequest: '/verify-request', // (used for check email message)
    // newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};
export default NextAuth(authOptions);
