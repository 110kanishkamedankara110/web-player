var a = new Audio("podcasts/57b97ad5-a140-2846-1f30-b928d0c69ac9.mp3");
var playing = false;
var ct = 0;
var pb = document.getElementById("pb");
var mut = document.getElementById("mu");
var muted = false;
var vol = 1;

function setmus() {
    document.getElementById("pl").setAttribute("max", a.duration);
}

function play() {
    if (playing) {

        pb.style.backgroundImage = "url('player/211876_play_icon.svg')";
        a.pause();
        playing = false;



    } else {

        a.play();

        pb.style.backgroundImage = "url('player/216309_media_pause_icon.svg')";
        playing = true;
        int();

    }


}
var inv;

function int() {
    inv = setInterval(playin, 1000);
}

function playin() {
    if (a.currentTime < a.duration) {
        ct = a.currentTime;

        var d = new Date(a.currentTime * 1000).toISOString().slice(11, 19)
        document.getElementById("pl").value = a.currentTime;

        document.getElementById("c").innerHTML = d;

    } else {
        clearInterval(inv);
        a.pause();
        ct = 0;
        document.getElementById("pl").value = 0;
        pb.style.backgroundImage = "url('player/211876_play_icon.svg')";
        document.getElementById("c").innerHTML = "00.00.00";
        playing = false;



    }

}



function next() {

    ct = document.getElementById("pl").value;
    var d = new Date(document.getElementById("pl").value * 1000).toISOString().slice(11, 19)

    a.currentTime = ct;
    document.getElementById("c").innerHTML = d;
    if (playing) {
        a.play();

        playing = true;

    } else {

        playing = false;

    }

}

function n() {
    ct = ct + 10;
    a.currentTime = ct;
    var d = new Date(document.getElementById("pl").value * 1000).toISOString().slice(11, 19)
    document.getElementById("c").innerHTML = d;
    if (playing) {
        a.play();

        playing = true;

    } else {

        playing = false;

    }
}

function p() {
    ct = ct - 10;
    a.currentTime = ct;
    var d = new Date(document.getElementById("pl").value * 1000).toISOString().slice(11, 19)
    document.getElementById("c").innerHTML = d;
    if (playing) {
        a.play();

        playing = true;

    } else {
        ct = 0;
        playing = false;

    }
}

function mute() {
    if (muted) {
        a.volume = vol;
        document.getElementById("vol").value = vol * 100;

        mut.style.backgroundImage = "url('player/8686243_ic_fluent_speaker_2_filled_icon.svg')";
        muted = false;
    } else {
        a.volume = 0;
        newvol = vol;
        document.getElementById("vol").value = 0;

        vol = newvol;

        muted = true;
        mut.style.backgroundImage = "url('player/8686376_ic_fluent_speaker_mute_filled_icon.svg')";

    }

}

function volu() {
    vol = ((document.getElementById("vol").value) / 100);
    if (vol == 0) {
        mut.style.backgroundImage = "url('player/8686376_ic_fluent_speaker_mute_filled_icon.svg')";
        muted = true;
    } else {
        mut.style.backgroundImage = "url('player/8686243_ic_fluent_speaker_2_filled_icon.svg')";
        muted = false;
    }
    a.volume = vol;
}