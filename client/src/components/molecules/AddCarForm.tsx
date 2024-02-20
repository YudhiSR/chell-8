import { Button, DialogActions, DialogContent, Input } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export interface IAddCarForm {
  open: boolean;
  selectedValue?: string;
  onClose: (value: string) => void;
}


const UIAddCarForm = (props: IAddCarForm) => {
  const { onClose, open } = props;

  return (
    <div>
      <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth={true}>
        <DialogTitle>Add New Car </DialogTitle>
        <DialogContent >
          <Input type="text" fullWidth={true} placeholder="Car Name" onChange={(e) => console.log(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UIAddCarForm;