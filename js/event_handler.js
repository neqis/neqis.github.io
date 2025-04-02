var globalModel = 1;
var globalView = 0;


document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "top"
            });

            new Dics({
                container: document.querySelectorAll('.b-dics')[4],
                hideTexts: false,
                textPosition: "top"
            });
        }
        
        function objectRenderEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/images/render_bmvs/doll/';
                        break;
                    case 1:
                        image.src = './assets/images/render_bmvs/fountain/';
                        break;
                    case 2:
                        image.src = './assets/images/render_bmvs/gundam/';
                        break;
                    case 3:
                        image.src = './assets/images/render_bmvs/jade/';
                        break;
                    case 4:
                        image.src = './assets/images/render_bmvs/man/';
                        break;
                    case 5:
                        image.src = './assets/images/render_bmvs/stone/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'rgb.png';
                        break;
                    case 1:
                        image.src = image.src + 'normal.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-bmvsimages-render").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEventBMVS(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/images/comp_bmvs/clock/';
                        break;
                    case 1:
                        image.src = './assets/images/comp_bmvs/cow/';
                        break;
                    case 2:
                        image.src = './assets/images/comp_bmvs/durian/';
                        break;
                    case 3:
                        image.src = './assets/images/comp_bmvs/dog/';
                        break;
                    case 4:
                        image.src = './assets/images/comp_bmvs/dragon/';
                        break;
                    case 5:
                        image.src = './assets/images/comp_bmvs/stone/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'neuralangelo.png';
                        break;
                    case 1:
                        image.src = image.src + 'ours.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-bmvsobjects-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEventDTU(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/images/comp_dtu/scan40/';
                        break;
                    case 1:
                        image.src = './assets/images/comp_dtu/scan55/';
                        break;
                    case 2:
                        image.src = './assets/images/comp_dtu/scan69/';
                        break;
                    case 3:
                        image.src = './assets/images/comp_dtu/scan83/';
                        break;
                    case 4:
                        image.src = './assets/images/comp_dtu/scan110/';
                        break;
                    case 5:
                        image.src = './assets/images/comp_dtu/scan122/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'neurodin.png';
                        break;
                    case 1:
                        image.src = image.src + 'ours.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-DTUobjects-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
        
        function ablationDTU(idx) {
            let dics = document.querySelectorAll('.b-dics')[3]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './assets/images/ablation/scan24/';
                        break;
                    case 1:
                        image.src = './assets/images/ablation/scan40/';
                        break;
                    case 2:
                        image.src = './assets/images/ablation/scan55/';
                        break;
                    case 3:
                        image.src = './assets/images/ablation/scan63/';
                        break;
                    case 4:
                        image.src = './assets/images/ablation/scan65/';
                        break;
                    case 5:
                        image.src = './assets/images/ablation/scan110/';
                        break;
                    case 6:
                        image.src = './assets/images/ablation/scan118/';
                        break;
                    case 7:
                        image.src = './assets/images/ablation/scan122/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + 'wo.png';
                        break;
                    case 1:
                        image.src = image.src + 'ours.png';
                        break;
                }
            }

            let scene_list = document.getElementById("object-ablationDTUobjects-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
