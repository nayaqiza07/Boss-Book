import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD
// Create Calculator (POST)
export const createCalculator = async (
  namaBarang,
  namaClient,
  materials,
  tukangKayu,
  tukangFinishing,
  materialTambahan,
  aksesoris,
  keseluruhanItem,
  harga
) => {
  try {
    const response = await customAPI.post("/calculator", {
      namaBarang,
      namaClient,
      materials,
      tukangKayu,
      tukangFinishing,
      materialTambahan,
      aksesoris,
      keseluruhanItem,
      harga,
    });
    toast.success("Berhasil menambahkan data Calculator");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// Read Calculator (GET)
export const getCalculator = async () => {
  try {
    const response = await customAPI.get("/calculator");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// Read Calculator By Id (GET)
export const getCalculatorById = async (id) => {
  try {
    const response = await customAPI.get(`/calculator/${id}`);

    const res = response.data.data;
    const resMaterials = res.materials;
    const resTukangKayu = res.tukangKayu;
    const resTukangFinishing = res.tukangFinishing;
    const resMaterialTambahan = res.materialTambahan;
    const resAksesoris = res.aksesoris;
    const resKeseluruhanItem = res.keseluruhanItem;
    const resHarga = res.harga;

    // console.log(response.data.data);
    return {
      res,
      resMaterials,
      resTukangKayu,
      resTukangFinishing,
      resMaterialTambahan,
      resAksesoris,
      resKeseluruhanItem,
      resHarga,
    };
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
