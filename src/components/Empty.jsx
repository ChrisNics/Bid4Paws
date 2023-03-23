import { Button, Empty as AntDEmpty } from 'antd';
const Empty = () => (
  <AntDEmpty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60
    }}
    description={<span>You have no dogs yet.</span>}>
    <Button type="primary">Add a new dog</Button>
  </AntDEmpty>
);

export default Empty;
