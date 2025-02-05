import DetailedOrder from "./modules/DetailedOrder";
import Orders from "./modules/Orders";
import RestaurantMenu from "./modules/RestaurantMenu";
import { Routes, Route } from 'react-router-dom';
import{ Layout, Image } from 'antd';
import Sidemenu from "../src/components/Sidemenu";
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
        <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />}/>
      <Route path="menu" element={<RestaurantMenu />}/>
        </Routes>
        </Content>
        <Footer style={{ textAlign:'center'}}>
          Uber Eats Restaurant Dashboard c2022
        </Footer>
      </Layout>
    </Layout>
   
    
  );
}



export default App;

