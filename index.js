        function toggleMenu(){
            var navMenu = document.querySelector('.navBar');
            navMenu.style.display = 'flex'
            // console.log(navMenu)
        }
        function hide(){
            var navMenu = document.querySelector('.navBar');
            navMenu.removeAttribute('style','display:none');
            // console.log(navMenu)
        
        }
        function searchMenu(){
            const btn = document.querySelector('.search');
            if(btn.style.display == 'none'){
                btn.style.display = 'block'
            }
            else{
                btn.style.display='none'
            }
            // console.log(btn)
        }


        document.addEventListener("DOMcontentLoaded", function(){
            const htmlEditor = document.getElementById("html-editor");
            const outPutFrame = document.getElementById("outPut").contentWindow.document;
            function upDate(){
                outPutFrame.open();
                outPutFrame.write(htmlEditor.innerText);
                outPutFrame.close();
            }
            htmlEditor.addEventListener("input", upDate);
            upDate();
        })