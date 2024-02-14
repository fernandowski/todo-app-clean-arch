import initApp from "./app/initApp";


const PORT = 3000;
const app = initApp();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
