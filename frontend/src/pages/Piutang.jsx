import { useState } from "react";

const Piutang = () => {
  const [showPiutang, setShowPiutang] = useState(false);
  const showDate = new Date();
  // const todayDate =
  //   showDate.getDay() +
  //   "," +
  //   showDate.getDate() +
  //   "/" +
  //   showDate.getMonth() +
  //   "/" +
  //   showDate.getFullYear();
  const stringDate = showDate.toDateString();

  return (
    <div className="w-full min-h-screen px-9 py-6">
      <div className="flex gap-3 lg:max-w-4xl lg:mx-auto">
        <button
          onClick={() => setShowPiutang(false)}
          className="border rounded p-1"
        >
          Piutang
        </button>
        <button
          onClick={() => setShowPiutang(true)}
          className="border rounded p-1"
        >
          Utang
        </button>
      </div>

      {showPiutang ? (
        <>
          {/* Utang Start */}
          <div className="my-5 p-5 flex flex-col gap-5 border rounded-lg shadow lg:max-w-4xl lg:mx-auto">
            <h2>Utang</h2>
            <div className="flex flex-col">
              <label htmlFor="nominal">Nominal</label>
              <input
                type="text"
                id="nominal"
                placeholder="Nominal"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="text"
                id="tanggal"
                value={stringDate}
                readOnly="true"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="keterangan">Keterangan</label>
              <textarea
                type="text"
                id="keterangan"
                placeholder="Keterangan"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <button className="border w-fit rounded p-1 bg-primary hover:bg-primary1 text-white">
              Simpan
            </button>
          </div>
          {/* Utang End */}
        </>
      ) : (
        <>
          {/* Piutang Start */}
          <div className="my-5 p-5 flex flex-col gap-5 border rounded-lg shadow lg:max-w-4xl lg:mx-auto">
            <h2>Piutang</h2>
            <div className="flex flex-col">
              <label htmlFor="nominal">Nominal</label>
              <input
                type="text"
                id="nominal"
                placeholder="Nominal"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="text"
                id="tanggal"
                value={stringDate}
                readOnly="true"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="keterangan">Keterangan</label>
              <textarea
                type="text"
                id="keterangan"
                placeholder="Keterangan"
                className="border rounded p-1 focus:outline-none"
              />
            </div>
            <button className="border w-fit rounded p-1 bg-primary hover:bg-primary1 text-white">
              Simpan
            </button>
          </div>
          {/* Piutang End */}
        </>
      )}
    </div>
  );
};

export default Piutang;
