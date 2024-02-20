import CarList from '../organisms/CarList';

import {
  Box,
  Toolbar,
} from '@mui/material/'
import OrderList from '../organisms/OrderList';

interface IPropsMainContent {
  defaultActiveTab?: string | null;
}
const drawerWidth = 240;


const MainContent: React.FC<IPropsMainContent> = ({ defaultActiveTab }) => {
  return (
    <>
      {
        defaultActiveTab === `Orders` ?
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            <OrderList />
          </Box>
          :
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />

            <CarList />
          </Box>
      }
    </>
  )
}

export default MainContent;