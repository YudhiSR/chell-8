import { Box } from "@mui/material"
import { useOrdersData } from "../../usecases/useOrdersData"



const OrderList = () => {
  const { ordersData } = useOrdersData();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {ordersData && ordersData.map((item: any, idx: number) => {
        return (
          <Box key={idx} sx={{ width: 'fit-content' }}>
            <h1>{item}</h1>
          </Box>
        )
      })}
    </div>
  )
}

export default OrderList