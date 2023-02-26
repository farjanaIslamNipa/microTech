
const Loader = {
    methods: {
        loader(isActive) {
            let loaderDiv = document.getElementById('fullScreenLoader');
            loaderDiv.className = "";
            isActive ?  loaderDiv.className = "full-screen-loader " : loaderDiv.className ="d-none";


        },
    }
};

export default Loader;
