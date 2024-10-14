//Thiếu phần hover từng mục
const dashboard = document.getElementById("dashboard");

const dashboardElement = document.createElement("div");

dashboardElement.className = "dashboard";

const pathName = location.pathname;

dashboardElement.innerHTML = `
    <div class="T1">
            <p> Melodies </p>
        </div> 
        <!-- DashBoard-Menu -->
        <div class="DashBoard-menu">
            <p class="Menu"> Menu</p>
            <div class="Menu-part">
                <div class="Border"> <i class="fa-solid fa-house"></i></i>
                    <p> <a href="index.html">Home</a> </p>
                </div>
                <div class="Border"> <i class="fa-regular fa-compass"></i>
                    <p> <a href="discover.html">Discover</a> </p>
                </div>
                <div class="Border"> <i class="fa-regular fa-circle-dot"></i>
                    <p> <a href="">Albums</a> </p>
                </div>
                <div class="Border"> <i class="bi bi-person-circle"></i>
                    <p> <a href="">Artists</a> </p>
                </div>
            </div>
        </div>
         <!-- Dashboard-Library  -->
        <div class="DashBoard-Library">
            <p class="Library"> Library</p>
            <div class="Library-part">
                <div class="Border"> <i class="fa-regular fa-clock"></i>
                    <p> <a href=""> Recently Added </a>  </p>
                </div>
                <div class="Border"> <i class="fa-regular fa-compass"></i>
                    <p> <a href="">Most Played</a> </p>
                </div>
            </div>
        </div>
         <!-- Dashboard-Playlist-and-Favorite  -->
        <div class="DashBoard-Playlist">
            <p class="Play-list"> Playlist and Favorite </p>
            <div class="Play-list-part">
                <div class="Border"> <i class="fa-regular fa-heart"></i>
                    <p> <a href="">Your Favorites </a>  </p>
                </div>
                <div class="Border"> <i class="bi bi-music-note-list"></i>
                    <p> <a href="">Your Playlist</a>  </p>
                </div>
                <div class="Border"> <img src="image/Add.png" alt="">
                    <p class="Add-playlist"> <a href="">Add Playlist</a>  </p>
                </div>
            </div>
        </div>
         <!-- Dashboard-general  -->
        <div class="DashBoard-general">
            <p class="General"> General </p>
            <div class="General-part">
                <div class="Border"> <i class="bi bi-gear"></i>
                    <p> <a href="">Setting</a>  </p>
                </div>
                <div class="Border"> <i class="bi bi-box-arrow-right Logout"></i>
                    <p class="Logout"> <a href="">Log Out</a>  </p>
                </div>
            </div>
        </div>
        `;

if (dashboard) {
    dashboard.appendChild(dashboardElement);
} else {
    console.error("Element with ID 'dashboard' not found");
}

function toggleSidebar() {
    const dashboard = document.getElementById('dashboard');
    if (window.innerWidth < 440) {
        dashboard.classList.add('hide');
    } else {
        dashboard.classList.remove('hide');
    }
}

// Gọi hàm khi tải trang và khi thay đổi kích thước
window.addEventListener('load', toggleSidebar);
window.addEventListener('resize', toggleSidebar);
