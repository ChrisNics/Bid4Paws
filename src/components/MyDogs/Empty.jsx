import { Button, Empty as AntDEmpty } from 'antd';
const Empty = ({ showModal }) => (
  <AntDEmpty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60
    }}
    description={<span>You have no dogs yet.</span>}>
    <Button type="primary" onClick={showModal}>
      Add a new dog
    </Button>
  </AntDEmpty>
);

export default Empty;
