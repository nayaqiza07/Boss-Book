import { Form } from "react-router-dom";
import FormInput from "../Form/FormInput";

const Filter = () => {
  return (
    <Form method="get" className="flex gap-3 lg:justify-end">
      <FormInput name="name" type="search" placeholder="Search Client" />
      <button
        type="submit"
        className="bg-primary_100 text-white px-3 rounded-lg"
      >
        Search
      </button>
    </Form>
  );
};

export default Filter;
