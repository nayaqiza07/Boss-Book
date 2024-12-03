import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";

const Accordion = () => {
  const list = [
    {
      _id: "Depan",
      name: "Depan",
    },
    {
      _id: "Belakang",
      name: "Belakang",
    },
    {
      _id: "Samping",
      name: "Samping",
    },
    {
      _id: "Atas & Bawah",
      name: "Atas & Bawah",
    },
    {
      _id: "Ambalan",
      name: "Ambalan",
    },
  ];

  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">Kayu</div>
        <div className="collapse-content">
          <FormSelect placeholder="Sisi" list={list} />

          <div className="lg:flex gap-5">
            <FormInput placeholder="Panjang" type="number" />
            <FormInput placeholder="Lebar" type="number" />
            <FormInput placeholder="Tebal" type="number" />
          </div>

          <div className="lg:flex gap-5">
            <FormInput placeholder="Harga Kayu" type="number" />
            <FormInput placeholder="Jumlah" type="number" />
            <FormInput placeholder="Kubikasi" type="number" />
          </div>

          <FormInput placeholder="Hasil" readonly={true} type="number" />

          <div className="flex justify-end gap-5">
            <button className="border border-primary_100 text-primary_100 rounded py-2 px-3">
              Hitung
            </button>
            <button className="bg-primary_100 text-white rounded py-2 px-3">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">Tukang Kayu</div>
        <div className="collapse-content">
          <FormInput />
          <FormInput />
          <FormInput />
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
