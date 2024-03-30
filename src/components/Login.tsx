
import { Typography } from 'antd';
import backArrow from '../assets/arrow back.svg'; 
import googleLogo from '../assets/Google.svg'
import facebookLogo from '../assets/facebook.svg'
import {Form, Input, Divider, Button}  from 'antd';
const { Title, Text } = Typography;

const MyComponent = () => {
  return (
    <div className="container">
      <img src={backArrow} alt="" width={35} style={{ marginTop: 20, marginLeft: 15 }} />

      <div className="TitleCont">
      <Title style={{ fontSize: '1.8rem', fontWeight: 650, letterSpacing: 1, textAlign: 'center', marginTop: 10}}>Login to your account</Title>
      <p style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: 1, textAlign: 'center' }}>Fill in your Personal Information</p>
      </div>

    <div className="InputField"style={{marginTop: '4rem'}}>
    <Form style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
  <Form.Item name="email" style={{ width: '87%'}}>
    <Input placeholder='Email' style={{height: '60px', fontSize: 23, letterSpacing: 2, background: 'none', border: '1.5px solid black', padding: 15 }}></Input>
  </Form.Item>

  <Form.Item name="password" style={{ width: '87%' }}>
    <Input.Password placeholder='Password' style={{height: '60px', fontSize: 22, background: 'none', border: '1.5px solid black', padding: 15}}></Input.Password>
  </Form.Item>
</Form>
<div style={{textAlign: 'right', marginRight: 15}}>
    <Button type='text'><Text underline style={{fontSize: 19}}>Forgot Password</Text></Button>
  </div>
    </div>

  <Divider style={{border: 'none', padding: 30, fontSize: 22}}>or Login with</Divider>

   <div className="socialButton" style={{display: 'flex', justifyContent: 'space-between', padding: '32px'}}>
    <Button type='primary' style={{width: '180px',  height: '60px', display: 'flex', background: 'none', border: '2px solid black', justifyContent: 'center', alignItems: 'center'}}>
      <div className="appInfo" style={{ gap: 6, display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
        <img src={googleLogo} style={{width: '35px'}} />
        <Text style={{fontSize: 20, color: 'black', letterSpacing: 1, fontWeight: 600}}>Google</Text>
        </div>
     </Button>

    <Button type='primary' style={{width: '180px',  height: '60px', display: 'flex', background: 'none', border: '2px solid black', justifyContent: 'center', alignItems: 'center'}}>
      <div className="appInfo" style={{ gap: 7, display: 'flex',  justifyContent: 'center', alignItems: 'center'}}>
        <img src={facebookLogo} style={{width: '30px'}} />
        <Text style={{fontSize: 20, color: 'black', letterSpacing: 1, fontWeight: 600}}>Facebook</Text>
        </div>
     </Button>

   </div>


    </div>
  );
}

export default MyComponent;
