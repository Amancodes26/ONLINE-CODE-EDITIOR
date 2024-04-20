import { Button } from "./ui/button";
import { Save, Share2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  compilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { Rootstate } from "@/redux/store";
import { handleError } from "@/utils/handleError";
import axios from "axios";

export const HelperHeader = () => {
  const fullCode = useSelector(
    (state: Rootstate) => state.compilerSlice.fullcode
  );
  const handleSaveCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  };

  const dispatch = useDispatch();
  const CurrentLanguage = useSelector(
    (state: Rootstate) => state.compilerSlice.CurrentLanguage
  );
  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className=" __btn_container flex gap-1">
        <Button
         onClick={handleSaveCode}
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          {" "}
          <Save size={16} />
          save
        </Button>
        <Button
          className="flex justify-center items-center gap-1 "
          variant="secondary"
        >
          <Share2Icon size={16} />
          share
        </Button>
      </div>
      <div className="__tab_switcher flex justify-center items-center gap-1">
        <small>Current language :</small>
        <Select
          defaultValue={CurrentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as compilerSliceStateType["CurrentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JAVASCRIPT</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
