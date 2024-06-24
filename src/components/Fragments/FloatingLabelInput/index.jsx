import Input from "../../Elements/Input";
import Label from "../../Elements/Label";

const FloatingLabelInput = ({ label, type, name }) => {
  return (
    <div className="relative">
      <Input name={name} type={type} id={label} />
      <Label label={label} />
    </div>
  );
};

export default FloatingLabelInput;
