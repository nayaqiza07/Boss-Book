import Button from "../Button/Button";
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

  const tukangKayu = [
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

  const aksesoris = [
    {
      _id: "Marmer",
      name: "Marmer",
    },
    {
      _id: "Kaca",
      name: "Kaca",
    },
    {
      _id: "Cermin",
      name: "Cermin",
    },
    {
      _id: "Besi",
      name: "Besi",
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
            <Button variant="primaryOutline" size="sm">
              Hitung
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">Tukang Kayu</div>
        <div className="collapse-content">
          <FormSelect placeholder="Nama Tukang Kayu" list={tukangKayu} />

          <div className="lg:flex gap-5">
            <FormInput placeholder="Panjang" type="number" />
            <FormInput placeholder="Lebar" type="number" />
          </div>

          <FormInput placeholder="Persen" type="number" />

          <FormInput placeholder="Hasil" readonly={true} type="number" />

          <div className="flex justify-end gap-5">
            <Button variant="primaryOutline" size="sm">
              Hitung
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Tukang Finishing
        </div>
        <div className="collapse-content">
          <FormSelect placeholder="Nama Tukang Finishing" list={tukangKayu} />

          <div className="lg:flex gap-5">
            <FormInput placeholder="Panjang" type="number" />
            <FormInput placeholder="Lebar" type="number" />
          </div>

          <div className="lg:flex gap-5">
            <FormInput placeholder="Persen" type="number" />
            <FormInput placeholder="Gerinda" type="number" />
            <FormInput placeholder="Packing" type="number" />
          </div>

          <FormInput placeholder="Hasil" readonly={true} type="number" />

          <div className="flex justify-end gap-5">
            <Button variant="primaryOutline" size="sm">
              Hitung
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Aksesoris & Akomodasi
        </div>
        <div className="collapse-content">
          <FormSelect placeholder="Aksesoris" list={aksesoris} />

          <div className="lg:flex gap-5">
            <FormInput placeholder="Panjang" type="number" />
            <FormInput placeholder="Lebar" type="number" />
          </div>

          <FormInput placeholder="Hasil" readonly={true} type="number" />

          <div className="flex justify-end gap-5">
            <Button variant="primaryOutline" size="sm">
              Hitung
            </Button>
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
