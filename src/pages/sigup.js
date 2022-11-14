import GambarLogo from './../componen/logoBelanja';
import ButtonCustom from './../componen/button';
import ButtonUmum from './../componen/buttonUmum';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';




function SigUpSeller() {
  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Please sign up with your account</h4>
                <div className={styles.bt} ><ButtonCustom/></div>
                <div className='mt-5'>
                  <FormK type='name' placeholder='Name'/>
                  <FormK type='email' placeholder='Email'/>
                  <FormK type='phone-number' placeholder='Phone Number'/>
                  <FormK type='store-number' placeholder='store number'/>
                  <FormK type='password' placeholder='Password'/>
                </div>
                <div className={styles.bt}><ButtonUmum/></div>
                <p className={styles.p}>Already have a Tokopedia account?<a className="link text-danger" href="#">Login</a></p>
            </div>
        </Row>
    </Container>
  ); 
}

export default SigUpSeller;
//import SigUpSeller from './pages/SigUpSeller';