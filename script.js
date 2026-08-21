const songs = [
  ["Ethereal", "Tmxy", 168, "Ethereal.mp3"],
  ["Luminary", "Joel Sunny", 189, "Luminary.mp3"],
  ["Zoltraak", "Evan Call", 173, "Zoltraak.mp3"],
  ];

const $ = (id) => document.querySelector(id);

const title = $("#title");
const artist = $("#artist");
const link = $("#link");
const bar = $("#progress");
const now = $("#now");
const left = $("#left");
const status = $("#status");
const vinyl = $("#vinyl");
const list = $("#list");
const playBtn = $("#play");

const audio = new Audio ();
let currentSongIndex = 0;
let isPlaying = false;

const formatTime = (seconds) => {
  if (isNaN(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = String(Math.floor(seconds % 60)).padStart(2, "o";
  return `${minutes}:${secs}`;
};

function updateUI() {
  const [name, singer, duration, audioFile] = songs[currentSongindex;

title.textContent = name;
artist.textContent = singer;

link.Atrribute("href");
link.style.cursor = "default";

list.innerHTML = songs.map((songData, index => {
  const isActive = index === currentSongIndex ? "active" : "";
  return `
    <a class="song-item ${isActive}" data-song="${index}" href=javascript:void(0);">
    <span>
