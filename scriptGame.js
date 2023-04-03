let player = document.querySelector('.player');
        let object = document.querySelector('.object');
        let moveBy = 50;
        let score = 0;
        let scoreElement = document.createElement('div');
        scoreElement.innerHTML = `Score: ${score}`;
        document.body.appendChild(scoreElement);
        
        window.addEventListener('load', () =>{
            const middleX = window.innerWidth / 2 - player.clientWidth / 2;
            const middleY = window.innerHeight / 2 - player.clientHeight / 2;
            player.style.position = 'absolute';
            player.style.left = 600 + 'px';
            player.style.top = middleY + 'px';
            object.style.position = 'absolute';
            const maxX = middleX + 50;
            const maxY = middleY + 50;
            const minX = middleX - 50;
            const minY = middleY - 50;
            object.style.left = Math.floor(Math.random() * (maxX - minX) + minX) + 'px';
            object.style.top = Math.floor(Math.random() * (maxY - minY) + minY) + 'px';
        });

        window.addEventListener('keyup', (e) =>{
            switch(e.key)
            {
                case 'ArrowLeft':
                    player.style.left = parseInt(player.style.left) - moveBy + 'px';
                    break;
                
                case 'ArrowRight':
                    player.style.left = parseInt(player.style.left) + moveBy + 'px';
                    break;

                case 'ArrowUp':
                    player.style.top = parseInt(player.style.top) - moveBy + 'px';
                    break;

                case 'ArrowDown':
                    player.style.top = parseInt(player.style.top) + moveBy + 'px';
                    break;
            }
            if (isColliding(player, object)) {
                score++;
                scoreElement.innerHTML = `Score: ${score}`;
                object.style.display = 'none';
                object.style.left = Math.floor(Math.random() * 500) + 'px';
                object.style.top = Math.floor(Math.random() * 500) + 'px';
                setTimeout(() => object.style.display = 'block', 2000);
            }
        });
        
        const buttonUp = document.querySelector('.buttonUp');
        const buttonDown = document.querySelector('.buttonDown');
        const buttonLeft = document.querySelector('.buttonLeft');
        const buttonRight = document.querySelector('.buttonRight');

        buttonUp.addEventListener('click', () => {
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            if (isColliding(player, object)) {
                score++;
                scoreElement.innerHTML = `Score: ${score}`;
                object.style.display = 'none';
                object.style.left = Math.floor(Math.random() * 500) + 'px';
                object.style.top = Math.floor(Math.random() * 500) + 'px';
                setTimeout(() => object.style.display = 'block', 2000);
            }
        });

        buttonDown.addEventListener('click', () => {
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            if (isColliding(player, object)) {
                score++;
                scoreElement.innerHTML = `Score: ${score}`;
                object.style.display = 'none';
                object.style.left = Math.floor(Math.random() * 500) + 'px';
                object.style.top = Math.floor(Math.random() * 500) + 'px';
                setTimeout(() => object.style.display = 'block', 2000);
            }
        });

        buttonLeft.addEventListener('click', () => {
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            if (isColliding(player, object)) {
                score++;
                scoreElement.innerHTML = `Score: ${score}`;
                object.style.display = 'none';
                object.style.left = Math.floor(Math.random() * 500) + 'px';
                object.style.top = Math.floor(Math.random() * 500) + 'px';
                setTimeout(() => object.style.display = 'block', 2000);
            }
        });

        buttonRight.addEventListener('click', () => {
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            if (isColliding(player, object)) {
                score++;
                scoreElement.innerHTML = `Score: ${score}`;
                object.style.display = 'none';
                object.style.left = Math.floor(Math.random() * 500) + 'px';
                object.style.top = Math.floor(Math.random() * 500) + 'px';
                setTimeout(() => object.style.display = 'block', 2000);
            }
        });

        function isColliding(el1, el2) {
            let rect1 = el1.getBoundingClientRect();
            let rect2 = el2.getBoundingClientRect();
            return !(
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.left > rect2.right
            );
        }