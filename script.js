"use strict"

const hourId = document.getElementById("hour");
const minuteId = document.getElementById("minute");
const secondId = document.getElementById("second");
const ampmId = document.getElementById("ampm");
const dateId = document.getElementById("date");
const monthNumber = document.getElementById("monthNumber");
const monthId = document.getElementById("month");
const yearId = document.getElementById("year");

function months(index) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[index];
}

function currentTime() {
  const current = new Date();

  let hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hourId.textContent = String(hours).padStart(2, "0");
  minuteId.textContent = String(minutes).padStart(2, "0");
  secondId.textContent = String(seconds).padStart(2, "0");
  ampmId.textContent = ampm;

  const date = current.getDate();
  const monthIndex = current.getMonth();
  dateId.textContent = String(date).padStart(2, "0");
  monthNumber.textContent = String(monthIndex + 1).padStart(2, "0");
  monthId.textContent = months(monthIndex);
  yearId.textContent = current.getFullYear();
};

const quotes = [
    "You are stronger than you know, and you have the power to overcome whatever challenges come your way. Don't forget your own strength. 💪🏽💫— Vikas",
    "In the quiet moments, remember this: Your light shines brighter than you realize, and the world is better because you're in it. 🚀💗— Vikas",
    "You are worthy of love, success, and happiness. Trust that good things are coming your way, just for being who you are.💪🏽💓— Vikas",
    "The struggles you face today are simply preparing you for the wonderful things that are yet to come. Hold on, brighter days are near.💫💕— Vikas",
    "Your presence matters more than you know. Even in moments of doubt, trust that you have a purpose and a path that's uniquely yours.🌸💕 — Vikas",
    "You don’t have to be perfect, just be you. You are enough, exactly as you are. 😌💖— Vikas",
    "When life feels tough, remember: You’ve overcome everything up until now, and you’re stronger because of it.💪🏽🔥 — Vikas",
    "It’s okay to not have all the answers right now. You are exactly where you need to be, and everything will fall into place.🔥💪🏽— Vikas",
    "Your journey is unique, and your story is worth telling. Keep going, you're creating something beautiful.💫💕— Vikas",
    "You are the hero of your own story. Every step you take brings you closer to the incredible life you’re meant to live. 📚💖— Vikas",
    "Your journey is yours alone, and it’s unfolding perfectly—trust the process. 💫💗 — Vikas",
    "You are not defined by your struggles; you are defined by how you rise from them.🫀♥ — Vikas",
    "No matter how tough the path, remember: You are capable of walking through it.🚶‍♀💪🏽 — Vikas",
    "The world may not always understand you, but your heart knows the way.💫💕 — Vikas",
    "Every step you take, no matter how small, is progress towards the life you’re meant to live.🌸💕 — Vikas",
    "You are worthy of rest, peace, and moments of joy, don’t forget to embrace them.💫💕— Vikas",
    "You are a masterpiece in progress, and every challenge you face is shaping you into something incredible.🌸💕 — Vikas",
    "Believe in yourself, because there’s no limit to what you can achieve. 🚶‍♀💪🏽— Vikas",
    "Remember, the greatest victories often come after the hardest battles. — Vikas",
    "You are capable of turning your dreams into reality—don’t give up, you’ve got this.🚶‍♀💪🏽 — Vikas",
    "Every morning is a new chance to rewrite your story. Today, choose courage, love, and the belief that you are unstoppable. 💫🔥 — Vikas",
    "You are not behind; you are on your own journey. Trust yourself, move forward, and shine in your own time. 🌸✨ — Vikas",
    "No matter how heavy your heart feels, remember: You are capable of carrying light and love within you. 💖💪🏽 — Vikas",
    "The sun still rises, and so do you. No matter how yesterday felt, today is your chance to begin again. ☀️🌸 — Vikas",
    "You are not just surviving—you are growing, learning, and becoming the person you were always meant to be. 🌱✨ — Vikas",
    "Even in the smallest steps, you are making progress. Keep going, because your dreams are closer than you think. 🚀💗 — Vikas",
    "On the days you doubt yourself, remember how far you’ve come. You are stronger than every challenge that tried to break you. 💪🏽🔥 — Vikas",
    "You are not alone, and you are never without purpose. You are meant to be here, exactly as you are. 🫶🏽✨ — Vikas",
    "Let today be the day you stop holding back. You are capable of greatness—step into it with confidence. 💥💖 — Vikas",
    "Some days will be tough, but so are you. Keep pushing forward, your future self is cheering you on. 📣💪🏽 — Vikas",
    "The world needs your light, your passion, and your kindness. Don’t be afraid to share your magic with the world. 🌟💕 — Vikas",
    "You deserve love, peace, and success. Keep working, keep believing, and don’t let doubt steal your dreams. 💖✨ — Vikas",
    "Life’s challenges are not there to stop you, but to shape you. Keep moving, you are becoming unstoppable. 💪🏽🔥 — Vikas",
    "Even on your hardest days, you are still enough. Your strength, your heart, and your dreams are more powerful than you realize. ❤️✨ — Vikas",
    "Your future self will thank you for every small step you take today. Keep building, keep believing. 🚀💫 — Vikas",
    "Be proud of how far you’ve come. You’re still standing, still growing, still becoming. That’s strength. 💪🏽💖 — Vikas",
    "The journey may not always be easy, but every moment is shaping the person you are meant to be. 🌱✨ — Vikas",
    "Your dreams are valid, your efforts matter, and your success is waiting for you. Keep pushing forward. 🚀💓 — Vikas",
    "When fear whispers ‘you can’t,’ let your heart roar ‘watch me.’ You are capable of amazing things. 🦁🔥 — Vikas",
    "You are more powerful than the doubts in your mind. Believe in yourself the way the universe believes in you. 💫💖 — Vikas",
    "Every morning is a new chance to rewrite your story. Today, choose courage, love, and the belief that you are unstoppable. 💫🔥 — Vikas",
    "You are not behind; you are on your own journey. Trust yourself, move forward, and shine in your own time. 🌸✨ — Vikas",
    "No matter how heavy your heart feels, remember: You are capable of carrying light and love within you. 💖💪🏽 — Vikas",
    "The sun still rises, and so do you. No matter how yesterday felt, today is your chance to begin again. ☀️🌸 — Vikas",
    "You are not just surviving—you are growing, learning, and becoming the person you were always meant to be. 🌱✨ — Vikas",
    "Even in the smallest steps, you are making progress. Keep going, because your dreams are closer than you think. 🚀💗 — Vikas",
    "On the days you doubt yourself, remember how far you’ve come. You are stronger than every challenge that tried to break you. 💪🏽🔥 — Vikas",
    "You are not alone, and you are never without purpose. You are meant to be here, exactly as you are. 🫶🏽✨ — Vikas",
    "Let today be the day you stop holding back. You are capable of greatness—step into it with confidence. 💥💖 — Vikas",
    "Some days will be tough, but so are you. Keep pushing forward, your future self is cheering you on. 📣💪🏽 — Vikas",
    "The world needs your light, your passion, and your kindness. Don’t be afraid to share your magic with the world. 🌟💕 — Vikas",
    "You deserve love, peace, and success. Keep working, keep believing, and don’t let doubt steal your dreams. 💖✨ — Vikas",
    "Life’s challenges are not there to stop you, but to shape you. Keep moving, you are becoming unstoppable. 💪🏽🔥 — Vikas",
    "Even on your hardest days, you are still enough. Your strength, your heart, and your dreams are more powerful than you realize. ❤️✨ — Vikas",
    "Your future self will thank you for every small step you take today. Keep building, keep believing. 🚀💫 — Vikas",
    "Be proud of how far you’ve come. You’re still standing, still growing, still becoming. That’s strength. 💪🏽💖 — Vikas",
    "The journey may not always be easy, but every moment is shaping the person you are meant to be. 🌱✨ — Vikas",
    "Your dreams are valid, your efforts matter, and your success is waiting for you. Keep pushing forward. 🚀💓 — Vikas",
    "When fear whispers ‘you can’t,’ let your heart roar ‘watch me.’ You are capable of amazing things. 🦁🔥 — Vikas",
    "You are more powerful than the doubts in your mind. Believe in yourself the way the universe believes in you. 💫💖 — Vikas"

  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  document.getElementById("quote").textContent = getRandomQuote();
  
setInterval(() => {
  currentTime();

}, 1000);

currentTime();
