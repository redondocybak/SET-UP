import{ Layout, Image } from 'antd';
import Sidemenu from "../src/components/Sidemenu";
import AppRoutes from './components/AppRoutes';

const { Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: 'white'}}>
        <Image src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg" preview={false}/>
        <Sidemenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign:'center'}}>
          Uber Eats Restaurant Dashboard c2022
        </Footer>
      </Layout>
    </Layout>
   
    
  );
}



export default App;

