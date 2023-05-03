import { Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import { Select, Text, Group, Avatar, Button } from '@mantine/core';
import { forwardRef, useState } from 'react';
import { useRouter } from 'next/router';
import useCurrentUser from '@/store/useCurrentUser';
import showNotification from '../../../../lib/showNotification';
import generateRandomString from '../../../../lib/generateRandomString';

const payment = [
  {
    value: 'gcash',
    label: 'G-cash',
    img: '/gcash.png'
  },
  {
    value: 'paymaya',
    label: 'Maya',
    img: '/maya.png'
  }
];

const PaymentMethod = NiceModal.create(({ price, plan }) => {
  const modal = useModal();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('Maya');
  const currentUser = useCurrentUser((state) => state.currentUser);
  const mapValue = (oldValue) => (oldValue / 100) * 10000;

  const SelectItem = forwardRef(({ img, label, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={img} />

        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  ));

  const handleProceed = async () => {
    try {
      const planToken = generateRandomString();
      const [userRes, checkoutRes] = await Promise.all([
        fetch(`/api/user/${currentUser._id}`, {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ planToken })
        }),
        fetch('https://api.paymongo.com/v1/checkout_sessions', {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization:
              'Basic c2tfdGVzdF8yVmQ5RTJkeE5aM0FvMW1zOVplb1dFWWI6cGtfdGVzdF9KZ0xMSHlhM1FOSkJTc041UUxuR1RCVkM='
          },
          method: 'POST',
          body: JSON.stringify({
            data: {
              attributes: {
                billing: {
                  address: {
                    line1: 'Blk 3 Lot 17',
                    line2: 'Cristina Homes',
                    city: 'Caloocan ',
                    state: 'NCR',
                    postal_code: '1400',
                    country: 'PH'
                  },
                  name: 'Christian',
                  email: 'rocksmeb@gmail.com',
                  phone: '0928495832'
                },
                line_items: [
                  {
                    currency: 'PHP',
                    images: [
                      'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    ],
                    amount: mapValue(price),
                    description: plan,
                    name: plan,
                    quantity: 1
                  }
                ],
                payment_method_types: [`${paymentMethod}`],
                send_email_receipt: false,
                show_description: true,
                show_line_items: true,
                cancel_url: 'http://localhost:3000/pricing',
                description: plan,
                success_url: `http://localhost:3000/redirect?id=${currentUser._id}&planToken=${planToken}&plan=${plan}`,
                statement_descriptor: 'http://localhost:3000/pricing',
                reference_number: 'test'
              }
            }
          })
        })
      ]);

      if (!userRes.ok) {
        const { errors } = await userRes.json();
        showNotification({
          title: 'Failed',
          message: errors[0].detail,
          color: 'red'
        });
        return;
      }

      if (!checkoutRes.ok) {
        const { errors } = await checkoutRes.json();
        showNotification({
          title: 'Failed',
          message: errors[0].detail,
          color: 'red'
        });
        return;
      }

      const {
        data: { attributes }
      } = await checkoutRes.json();

      router.push(attributes.checkout_url);
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Failed',
        message: 'An error occurred while processing your request.',
        color: 'red'
      });
    }
  };

  return (
    <Modal {...antdModal(modal)} footer={null}>
      <Select
        value={paymentMethod}
        onChange={setPaymentMethod}
        itemComponent={SelectItem}
        label="Payment Method"
        placeholder="Pick one"
        nothingFound="No options"
        maxDropdownHeight={280}
        data={payment}
      />
      <div className="flex justify-end">
        <Button color="orange" mt={30} onClick={handleProceed}>
          Proceed
        </Button>
      </div>
    </Modal>
  );
});

PaymentMethod.displayName = 'PaymentMethod';

export default PaymentMethod;
