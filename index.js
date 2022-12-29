const grid = document.getElementsByClassName('grid')[0]
const hero = document.getElementsByClassName('hero')[0]
let heroClicked = false
let aboutClicked = false

document.addEventListener('click', function(e) {
    const heroImg = document.getElementById('hero-img')
    if (!heroClicked && (e.target.id === 'hero-img' || e.target === hero || e.target.parentElement === hero)) {
        heroClicked = true
        console.log(heroClicked)
        heroImg.style.gridRow = '3 / 4'
        heroImg.style.gridColumn = '2 / -2'

            heroImg.style.gridRow = '3 / 4'
            heroImg.style.gridColumn = '2 / -2'
            hero.style.color = 'black'
            hero.style.marginBottom = '0'
            grid.innerHTML += `
            <div id='hero-article-content'>
                <h2>How to stay commited to learning</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h2>How to stay commited to learning</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            `
            document.getElementById('hero-article-content').style.gridRow = '4 / 5'
            document.getElementById('hero-article-content').style.gridColumn = '2 / -2'
            document.getElementById('hero-article-content').style.margin = 'auto 2em auto 2em'
            hero.style.margin = '0 2em auto 2em'
            document.getElementsByClassName('article')[0].style.marginTop = '0px'
        
    }
    else if (e.target.id === 'about' && !aboutClicked) {
        aboutClicked = true
        if (document.getElementById('hero-article-content')) {
            document.getElementById('hero-article-content').style.display = 'none'
        }
        
        heroImg.style.display = 'none'
        
        /* hero.style.gridColumn = '2 / -2'
        hero.style.gridRow = '2 / 3' */
        
        hero.style.display = 'none' 
        
        //document.getElementById('hero-article-content').style.display = 'none'
        grid.innerHTML += `
        <div id="about-section">
            <div class="about-top">
                <img id='avatar' src='avatar.png'>
                <div>
                    <h1>Hi there! My name is Roku and welcome to my learning journal.</h1>
                    <p>After several months of learning in the Frontend Developer Career Path,
                    I've made the big jump over to the Bootcamp to get expert code reviews
                    of my Solo Projects projects and meet like-minded peers.</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <h2>How to stay commited to learning</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        `
        /*document.getElementById('avatar').style.textAlign = 'center'
        hero.style.textAlign = 'center'*/
        document.getElementById('about-section').style.gridRow = '2 / 3'
        document.getElementById('about-section').style.gridColumn = '2 / -2'
    }

    else if (e.target.id === 'home') {
        location.reload()
    }
    else if (e.target.id === 'view-more') {
        e.preventDefault()
        document.querySelector('main').innerHTML += `
        <div class="article">
                <img class="article-img" src="images/img2.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog one</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="article">
                <img class="article-img" src="images/img3.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog two</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="article">
                <img class="article-img" src="images/img4.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog three</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="article">
                <img class="article-img" src="images/img5.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog four</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="article">
                <img class="article-img" src="images/img6.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog five</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
            <div class="article">
                <img class="article-img" src="images/img7.png" alt="">
                <p class="date">Dec 16, 2022</p>
                <h3>Blog six</h3>
                <p class="sub">I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                    After several months of learning in the Frontend Developer Career Path.</p>
            </div>
        `
    }
})
