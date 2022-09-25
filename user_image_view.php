<?php

$coverart = "cover art/LIFE WITH DYNAMIC.png";
?>
<!DOCTYPE html>
<html>

<head>
    <title>Music </title>
    <link rel="stylesheet" href="style.css" />
    <!-- <link rel="icon" href="images/logo.jpg" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body onload="setmus();">

    <div class="bg-div" style="background-image: url('images/abstract_02-wallpaper-1366x768.jpg');">

    </div>
    <div class="contain-div">
        <div class="img-div" style="background-image: url('<?php echo $coverart ?>');">

        </div>
        <div class="m-div">
            <div class="des-div">
                <div class="player">
                    <div class="player-lef" style="background-image: url('<?php echo $coverart ?>');"></div>
                    <!-- <div class="tp"></div> -->
                    <div class="player-rig">
                        <div class="play-rig-top">
                            <div style="width:100%;margin-top:20px;">
                                <span style="color: white;text-align:center">test: this is a test title test test</span>
                                <input type="range" style="width:90%;text-align: center;" id="pl" min="0" max="100" value="0" onchange="next()" class="range"><br />
                                <span style="color: white;text-align:center" id="c">00.00.00</span>
                            </div>
                        </div>
                        <div class="vol" onmouseover="document.getElementById('vol').style.display='inline';" onmouseout="document.getElementById('vol').style.display='none';">
                            <button class="mute" id="mu" onclick="mute()"></button> <input type="range" class="v" style="height:100%;text-align: center;display:none;" onchange="volu();" id="vol" min="0" max="100" value="100">
                        </div>
                        <div class="play-rig-bot">

                            <button class="prev" onclick="p()"> </button>
                            <button class="play-but" id="pb" onclick="play()"> </button>
                            <button class="next" onclick="n()"> </button>

                        </div>
                    </div>
                </div><br /><br />
                <div class="mu-descla">
                    <h1>Description</h1>
                    <h3>Episode 04 | Technology From Our View | "Sex ලෙඩ්ඩු & Tec ලෙඩ්ඩු</h3>
                    <span>
                        On this episode we are having a chat about dating apps, dating scams, financial scams, pornographic content and their consequences. We’re also talking about people who use technology to embarrass our society plus discussing about cringe incidents that we all know. And also these contents are mainly based on our real-life experiences.
 "The Tinder Swindler" on Netflix : https://www.netflix.com/us/title/81254340?s=a&trkid=13747225&t=wha&vlang=en&clip=81563542
 Visit our NFT collection : https://opensea.io/DynamicBiz




                    </span>
                </div>
                <div class="mu-rec">
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>
                    <div class="a-art"></div>

                </div>





            </div>
        </div>
    </div>








    <div class="back" id="back" onclick="history.back()">

    </div>

    <script src="script.js"></script>



</body>

</html>
<?php





?>