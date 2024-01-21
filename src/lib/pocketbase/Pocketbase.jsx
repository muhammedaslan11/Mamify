import PocketBase from "pocketbase";

export const pb = new PocketBase("https://mahe-english.fly.dev");
export const imageUrl = "https://mahe-english.fly.dev/api/files/f0vyhe26igz3zbn/wqy7ja91fv59v76/";

// useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await pb.collection('mamify_test').getOne('wqy7ja91fv59v76');
//         if (response) {
//           const dataGet = await response;
//           console.log("neler",dataGet)
//         } else {
//           console.error("Veri alınamadı.");
//         }
//       } catch (error) {
//         console.error("Bir hata oluştu Lannn:", error);
//       }
//     }
//     fetchData();
//   }, []);