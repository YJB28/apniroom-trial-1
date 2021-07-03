console.log("welcome To ApniRoom's Console");
let room = document.getElementById("room");
room.addEventListener("click", funRoom);



function funRoom() {
    // console.log("Room function");
    let articleRoom = document.getElementById("articleRoom");
    articleRoom.style.display = "none";
    let tabArticle = document.getElementById("tabArticle");
    tabArticle.innerHTML = `<div>

    <form action="">
        <input type="text" placeholder="Enter City">
        <input type="text" placeholder="College,Classes,Company Area">


        <select>
            <option>Tentent Type</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <select>
            <option>Sharing Type</option>
            <option>Single Room</option>
            <option>Double Sharing</option>
            <option>Triple Sharing</option>
            <option>Four Sharing</option>
        </select>

        <select>
            <option>Subscription Plan</option>
            <option>Monthly</option>
            <option>Semester</option>
            <option>Yearly</option>
        </select>
        <br>
        <button class=" btn search-btn " type="submit">Search</button>
    </form>
</div>`;
    console.log("Room Tab Fired...")

}

let mess = document.getElementById("mess");
mess.addEventListener("click", funMess);

function funMess() {
    // console.log("Mess function");
    let articleRoom = document.getElementById("articleRoom");
    articleRoom.style.display = "none";
    let tabArticle = document.getElementById("tabArticle");
    tabArticle.innerHTML = `<div>

    <form action="">
        <input type="text" placeholder="city">
        <input type="text" placeholder="College,Classes,Company Area">


        <select>
            <option>Tentent Type</option>
            <option>Male</option>
            <option>Female</option>
        </select>



        <select>
            <option>Rate</option>
            <option>Rs1200/Month</option>
            <option>Rs.1500/Month</option>
            <option>Rs.1800/Month</option>
            <option>Rs.2000/Month</option>
          </select>



        <select>
              <option>Service</option>
               <option>At Room</option>
            <option>On Mess</option>
       </select>
        <br>
        <button class="btn search-btn" type="submit">Search</button>
    </form>
</div>`;
    // console.log("Mess Tab Fired...")

}

let order = document.getElementById("order");
order.addEventListener("click", funOrder);

function funOrder() {
    // console.log("Mess function");
    let articleRoom = document.getElementById("articleRoom");
    articleRoom.style.display = "none";
    let tabArticle = document.getElementById("tabArticle");
    tabArticle.innerHTML = `<div>
    <form action="">
        <input type="text" placeholder="city">
        <input type="text" placeholder="College Area">



        <select>
        <option>Books</option>
        <option>1<sup>st</sup> Year</option>
        <option>2<sup>nd</sup> Year</option>
        <option>3<sup>rd</sup> Year</option>
        <option>4<sup>th</sup> Year</option>
    </select>



        <select>
        <option>Stationary</option>
    </select>





        <input type="text" placeholder="Enter Your Stationary">
        <input type="text" placeholder="Which form will you Fill?">
        <br>

        <button class="btn search-btn" type="submit">Search</button>
    </form>
</div>`;
    // console.log("order Tab Fired...")

}

// Slider
var i = 0; // Start Point
var images = []; // Images Array
var time = 5000; // Time Between Switch

// Image List
images[0] = ` <div class="feedback center">
                <div class="mb-2" style="width: 100%; display: inline-block;">
                    <p><span style="font-size: 2.5em; ">"</span><br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatum labore atque iusto minus quaerat eos odit ex accusantium, nobis ad, in velit omnis est repellendus consequatur
                        aspernatur officia vel.
                        <br><br>

                    </p>
                </div>
                <div>
                    <div style="display: inline-block;">
                        <div class="row flex ">
                            <div class="cl-lg-4 pr-3">
                                <img class="f-circle" src="./images/yjb.jpg">
                            </div>
                            <div class="cl-lg-8">
                                <p style="font-size: 1.4rem;">YJB</p>
                                <p style="font-size: 1rem;font-style: italic;">Software Engineer</p>
                                <p style="font-size: 1rem;font-style: italic;">xyz.com India</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>`;
images[1] = ` <div class="feedback center">
                <div class="mb-2" style="width: 100%; display: inline-block;">
                    <p><span style="font-size: 2.5em; ">"</span><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into .
                        <br><br>

                    </p>
                </div>
                <div>
                    <div style="display: inline-block;">
                        <div class="row flex ">
                            <div class="cl-lg-4 pr-3">
                                <img class="f-circle" src="./images/yjb2.jpg">
                            </div>
                            <div class="cl-lg-8">
                                <p style="font-size: 1.4rem;">YJB</p>
                                <p style="font-size: 1rem;font-style: italic;">B.TECH II, Computer Engineering</p>
                                <p style="font-size: 1rem;font-style: italic;">GCOE Yavatmal (MH)</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>`;
images[2] = ` <div class="feedback center">
                <div class="mb-2" style="width: 100%; display: inline-block;">
                    <p><span style="font-size: 2.5em; ">"</span><br> Lorem Nullam fringilla odio in sem sodales posuere vitae in metus. Suspendisse egestas felis in felis ultrices scelerisque. Morbi scelerisque sapien odio. Duis quis pellentesque nulla, dictum euismod mi. Duis eu dapibus nulla, id tincidunt diam. In hac habitasse platea dictumst. Suspendisse ultricies, est ut blandit porta, ligula nunc posuere enim, tincidunt gravida mi orci et tellus. Ut nec placerat felis, sed pellentesque tellus. Aliquam quis sapien dolor. Integer faucibus maximus justo, ac fermentum libero ornare in. Maecenas sem nisl, vulputate nec massa quis, iaculis feugiat mi. Morbi accumsan egestas ipsum, ac tempor massa cursus a..
                        <br><br>

                    </p>
                </div>
                <div>
                    <div style="display: inline-block;">
                        <div class="row flex ">
                            <div class="cl-lg-4 pr-3">
                                <img class="f-circle" src="./images/xyz.png">
                            </div>
                            <div class="cl-lg-8">
                                <p style="font-size: 1.4rem;">Harry</p>
                                <p style="font-size: 1rem;font-style: italic;">MBBS</p>
                                <p style="font-size: 1rem;font-style: italic;">Medical College, Nagpur (MH)</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>`;
images[3] = ` <div class="feedback center">
                <div class="mb-2" style="width: 70%; display: inline-block;">
                    <p><span style="font-size: 2.5em; ">"</span><br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatum labore atque iusto minus quaerat eos odit ex accusantium, nobis ad, in velit omnis est repellendus consequatur
                        aspernatur officia vel.
                        <br><br>

                    </p>
                </div>
                <div>
                    <div style="display: inline-block;">
                        <div class="row flex ">
                            <div class="cl-lg-4 pr-3">
                                <img class="f-circle" src="./images/rutik.jpg">
                            </div>
                            <div class="cl-lg-8">
                                <p style="font-size: 1.4rem;">Rohan</p>
                                <p style="font-size: 1rem;font-style: italic;">JEE Aspirant</p>
                                <p style="font-size: 1rem;font-style: italic;">Unique Classes,Pune (MH)</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>`;

// Change Image
function changeImg() {
    let slide = document.getElementById("slide");
    slide.innerHTML = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;

// Toggeler Button

let menulines = document.getElementById("menulines");
menulines.addEventListener("click", openNav);

function openNav() {
    console.log("openNav Fired...");
    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "block";
}

// let menulines = document.getElementById("menulines");
menulines.addEventListener("dblclick", closeNavbar);

function closeNavbar() {
    console.log("openNavbar Fired...");
    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "none";
}


let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closeNav);

function closeNav() {
    console.log("CloseNav Fired...");

    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "none";
}