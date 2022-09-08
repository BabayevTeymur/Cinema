const section1 = document.querySelector('.section_grid_container')
const popularMovies = document.querySelector('#popular_movies')
const leftIcon = document.querySelector('.left_icon')
const rightIcon = document.querySelector('.right_icon')
const bestComedies = document.querySelector('#best_comedies')
const leftIcon1 = document.querySelector('.left_icon1')
const rightIcon1 = document.querySelector('.right_icon1')
const action = document.querySelector('#action')
const leftIcon2 = document.querySelector('.left_icon2')
const rightIcon2 = document.querySelector('.right_icon2')
let search = document.querySelector('.search')
let exitContainer = document.querySelector('.exit')
let exit = document.querySelector('.real_exit')
let searchOpen = document.querySelectorAll('#open_search')
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')

fetch('./database/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(video => {
            section1.innerHTML += ` 
                <div class="card" id="card1">
                    <div class="video">
                         <video src="${video.video}" controls></video>
                    </div>
                    <p class="name">${video.title}</p>
                </div>`
        })
    })

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp => resp.json())
    .then(data => {
        data.results.forEach(slide => {
            popularMovies.innerHTML += `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${slide.poster_path}">
        <p class="name">${slide.title}</p>
    </div>`
        })

        let count = 0

        function slider() {
            for (let i = 0; i < popularMovies.children.length; i++) {
                popularMovies.children[i].style.transform = `translateX(${-1 * count}px)`
                console.log(popularMovies.children)
            }
        }

        setInterval(() => {
            if (count < popularMovies.children.length - 6) {
                count++
                slider()
            } else {
                count = 0
                slider()
            }
        }, 6000)

        leftIcon.addEventListener('click', () => {
            if (count > 0) {
                count--
                slider()
            } else {
                count = 0
                slider()
            }
        })

        rightIcon.addEventListener('click', () => {
            if (count < popularMovies.children.length - 6) {
                count++
                slider()
            } else {
                count = 0
                slider()
            }
        })
    })

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp2 => resp2.json())
    .then(data2 => {
        console.log(data2);
        data2.results.forEach(slide2 => {
            action.innerHTML += `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${slide2.poster_path}">
        <p class="name">${slide2.title}</p>
    </div>`
        })

        let count2 = 0

        function slider2() {
            for (let i = 0; i < action.children.length; i++) {
                action.children[i].style.transform = `translateX(${-300 * count2}px)`
            }
        }

        setInterval(() => {
            if (count2 < action.children.length - 4) {
                count2++
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        }, 4000)

        leftIcon1.addEventListener('click', () => {
            if (count2 > 0) {
                count2--
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        })

        rightIcon1.addEventListener('click', () => {
            if (count2 < action.children.length - 4) {
                count2++
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        })
    })

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
    .then(resp1 => resp1.json())
    .then(data1 => {
        data1.results.forEach(slide1 => {
            bestComedies.innerHTML += `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500/${slide1.poster_path}">
        <p class="name">${slide1.title}</p>
    </div>`
        })

        let count1 = 0

        function slider1() {
            for (let i = 0; i < bestComedies.children.length; i++) {
                bestComedies.children[i].style.transform = `translateX(${-300 * count1}px)`
                console.log(bestComedies.children)
            }
        }

        setInterval(() => {
            if (count1 < bestComedies.children.length - 4) {
                count1++
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        }, 6000)

        leftIcon1.addEventListener('click', () => {
            if (count1 > 0) {
                count1--
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        })

        rightIcon1.addEventListener('click', () => {
            if (count1 < bestComedies.children.length - 4) {
                count1++
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        })
    })
for (let i = 0; i < searchOpen.length; i++) {
    searchOpen[i].addEventListener('click', () => {
        if (exitContainer.style.display === 'none') {
            header.style.filter = 'blur(30px)'
            main.style.filter = 'blur(30px)'
            footer.style.filter = 'blur(30px)'
            exitContainer.style.display = 'block'
            if (search.value === video.title || search.value === slide.title || search.value === slide1.title || search.value === slide2.title) {
                header.style.filter = 'blur(0)'
                main.style.filter = 'blur(0)'
                footer.style.filter = 'blur(0)'
                exitContainer.style.display = 'none'

            }
        } else {
            header.style.filter = 'blur(0)'
            main.style.filter = 'blur(0)'
            footer.style.filter = 'blur(0)'
            exitContainer.style.display = 'none'
        }
        slider()
        slider1()
        slider2()
    })
}