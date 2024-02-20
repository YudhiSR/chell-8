import { Box, Button } from "@mui/material"
import UICardProduct from "../molecules/ProductCard"
import { useCarsData } from "../../usecases/useCarsData"
import UIAddCarForm from "../molecules/AddCarForm";
import { useState } from "react";



const CarList = () => {
  const { carsData } = useCarsData();
  const [openAddCarForm, setOpenAddCarFrom] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setOpenAddCarFrom(true)}>Add Car</Button>
      <UIAddCarForm
        open={openAddCarForm}
        onClose={() => setOpenAddCarFrom(false)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {carsData && carsData.map((item: any, idx: number) => {
          return (
            <Box key={idx} sx={{ width: 'fit-content' }}>
              <UICardProduct data={item} />
            </Box>
          )
        })}
      </div>
    </div>
  )
}

export default CarList