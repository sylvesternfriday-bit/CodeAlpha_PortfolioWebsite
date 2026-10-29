const P=(d)=>d;
const ICONS={
menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.3-3.9 1.5a13.4 13.4 0 0 0-7 0C6.8 2.8 5.6 3.1 5.6 3.1a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 4 10.6c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
x:'<path d="M4 4l16 16M20 4 4 20"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
pin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
phone2:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/>',
globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5"/>',
ext:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>',
plus:'<path d="M12 5v14M5 12h14"/>'};
const icon=n=>`<svg viewBox="0 0 24 24">${ICONS[n]}</svg>`;
function paintIcons(root=document){root.querySelectorAll('[data-i]').forEach(e=>{e.insertAdjacentHTML('afterbegin',icon(e.dataset.i));e.removeAttribute('data-i')})}
paintIcons();
document.getElementById('yr').textContent=new Date().getFullYear();

/* ---- hero slideshow: zoom out / zoom in, one slide every 10 seconds ---- */
const slides=document.getElementById('slides');
for(let i=1;i<=7;i++){const d=document.createElement('div');d.className='slide'+(i%2===0?' zi':'');d.style.backgroundImage=`url(images/hero${i}-bg.jpg)`;slides.appendChild(d)}
let cur=0;const sl=[...slides.children];sl[0].classList.add('on');
const HERO_MS=10000;/* each hero background stays for 10 seconds */
setInterval(()=>{const p=sl[cur];p.classList.remove('on');p.classList.add('prev');setTimeout(()=>p.classList.remove('prev'),1200);cur=(cur+1)%sl.length;sl[cur].classList.remove('prev');sl[cur].classList.add('on')},HERO_MS);

/* ---- projects (add new ones to this list) ---- */
const PROJECTS=[
 {name:'Alphaplay',img:'Featured-Project-Screenshot/Alphaplay-screenshot.jpg',link:'',desc:'A modern music player web app with a clean interface and smooth playback experience.',tags:['HTML','CSS','JavaScript']},
 {name:'Personal Portfolio',img:'',link:'',desc:'A responsive portfolio website to showcase my skills and projects.',tags:['HTML','CSS','JavaScript']},
 {name:'My Gallery',img:'Featured-Project-Screenshot/MyGallery-screenshot.jpg',link:'',desc:'A personal photo gallery web app with category filtering and responsive grid layout.',tags:['HTML','CSS','JavaScript']}
];
document.querySelectorAll('.projects-grid').forEach(g=>{
 PROJECTS.forEach(p=>{
  const el=document.createElement(p.link?'a':'div');el.className='card proj';
  if(p.link){el.href=p.link;el.target='_blank';el.rel='noopener'}
  el.innerHTML=`<div class="shot">${p.img?`<img src="${p.img}" alt="${p.name} screenshot" loading="lazy">`:'Screenshot coming soon'}</div>
  <div class="pb"><div class="pt"><h3>${p.name}</h3><span data-i="ext"></span></div><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
  g.appendChild(el)});
 if(g.closest('#projects')){const f=document.createElement('div');f.className='card proj future';f.innerHTML=icon('plus')+'<p>Future projects will appear here</p>';g.appendChild(f)}
 paintIcons(g)});

/* ---- views / routing ---- */
const views=[...document.querySelectorAll('.view')],links=[...document.querySelectorAll('#menu a')],menu=document.getElementById('menu'),burger=document.querySelector('.burger');
function route(){const id=(location.hash||'#home').slice(1);const v=views.find(x=>x.id===id)||views[0];
 views.forEach(x=>x.classList.toggle('on',x===v));links.forEach(a=>a.classList.toggle('on',a.hash==='#'+v.id));
 menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Open navigation menu');window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
burger.onclick=()=>{
  const open=menu.classList.toggle('open');
  burger.setAttribute('aria-expanded',String(open));
  burger.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
};


/* ---- movable, chained social/contact FABs ---- */
(() => {
  const dock = document.getElementById('socialFabDock');
  const handle = document.getElementById('socialFabHandle');
  if (!dock || !handle) return;

  const POSITION_KEY = 'sf_social_fab_position_v1';
  const EDGE_GAP = 12;
  let dragState = null;

  const getClampedPosition = (left, top) => {
    const rect = dock.getBoundingClientRect();
    const maxLeft = Math.max(EDGE_GAP, window.innerWidth - rect.width - EDGE_GAP);
    const maxTop = Math.max(EDGE_GAP, window.innerHeight - rect.height - EDGE_GAP);
    return {
      left: Math.min(Math.max(EDGE_GAP, left), maxLeft),
      top: Math.min(Math.max(EDGE_GAP, top), maxTop)
    };
  };

  const placeDock = (left, top, persist = false) => {
    const position = getClampedPosition(left, top);
    dock.style.left = `${position.left}px`;
    dock.style.top = `${position.top}px`;
    dock.style.right = 'auto';
    dock.style.bottom = 'auto';
    dock.classList.add('is-positioned');
    if (persist) {
      try {
        localStorage.setItem(POSITION_KEY, JSON.stringify(position));
      } catch (_) {
        // The FAB still moves for this visit when storage is unavailable.
      }
    }
  };

  try {
    const saved = JSON.parse(localStorage.getItem(POSITION_KEY) || 'null');
    if (saved && Number.isFinite(saved.left) && Number.isFinite(saved.top)) {
      requestAnimationFrame(() => placeDock(saved.left, saved.top));
    }
  } catch (_) {
    // Default to the CSS bottom-right position when storage is unavailable.
  }

  handle.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const rect = dock.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      moved: false
    };
    placeDock(rect.left, rect.top);
    dock.classList.add('dragging');
    handle.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  handle.addEventListener('pointermove', event => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const dx = event.clientX - dragState.startX;
    const dy = event.clientY - dragState.startY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragState.moved = true;
    if (dragState.moved) placeDock(dragState.left + dx, dragState.top + dy);
  });

  const finishDrag = event => {
    if (!dragState || (event && event.pointerId !== dragState.pointerId)) return;
    if (dragState.moved) {
      const rect = dock.getBoundingClientRect();
      placeDock(rect.left, rect.top, true);
    }
    dragState = null;
    dock.classList.remove('dragging');
  };
  handle.addEventListener('pointerup', finishDrag);
  handle.addEventListener('pointercancel', finishDrag);
  handle.addEventListener('lostpointercapture', finishDrag);

  handle.addEventListener('keydown', event => {
    const directions = {
      ArrowLeft: [-24, 0], ArrowRight: [24, 0],
      ArrowUp: [0, -24], ArrowDown: [0, 24]
    };
    const delta = directions[event.key];
    if (!delta) return;
    event.preventDefault();
    const rect = dock.getBoundingClientRect();
    placeDock(rect.left + delta[0], rect.top + delta[1], true);
  });

  window.addEventListener('resize', () => {
    if (dock.classList.contains('is-positioned') && !dragState) {
      const rect = dock.getBoundingClientRect();
      placeDock(rect.left, rect.top, true);
    }
  }, { passive: true });
})();

/* ---- Anonymous feedback: persistent browser identity, Firebase users, posts, comments and replies ---- */
const CFG = window.FIREBASE_CONFIG || {};
const note = document.getElementById('dbNote');
const status = document.getElementById('reviewStatus');
const profileStatus = document.getElementById('profileStatus');
const reviewForm = document.getElementById('reviewForm');
const reviewSubmit = reviewForm.querySelector('button[type="submit"]');
const profileForm = document.getElementById('profileForm');
const profileNameInput = document.getElementById('profileName');
const profileAvatarInput = document.getElementById('profileAvatar');
const profileAvatarPreview = document.getElementById('profileAvatarPreview');
const removeProfileAvatarButton = document.getElementById('removeProfileAvatar');
const identityCurrent = document.getElementById('identityCurrent');
const identityAvatar = document.getElementById('identityAvatar');
const identityLabel = document.getElementById('identityLabel');
const identitySub = document.getElementById('identitySub');
const editProfileButton = document.getElementById('editProfile');
const cancelProfileButton = document.getElementById('cancelProfile');
const profileHeading = document.getElementById('profileHeading');
const KEY = 'sf_reviews_v2';
const PROFILE_KEY = 'sf_anon_profile_v1';
const LOCAL_UID_KEY = 'sf_anon_uid_v1';
let data = [];
let db = null;
let auth = null;
let mode = 'local';
let currentUser = null;
let profile = null;
let localUserId = '';
let rating = 0;
let selectedProfileAvatar = '';
let localComments = {};
const commentsByReview = {};
const commentListeners = new Map();
let pendingRender = false;
const rs = document.getElementById('rStars');
const DEFAULT_AVATAR = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="64" fill="#23264a"/><circle cx="64" cy="45" r="23" fill="#a3a6c4"/><path d="M20 116c3-25 20-39 44-39s41 14 44 39" fill="#a3a6c4"/></svg>');

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};
const setStatus = (message, isError = false) => {
  status.textContent = message;
  status.classList.toggle('error', isError);
  status.hidden = !message;
};
const setProfileStatus = (message, isError = false) => {
  profileStatus.textContent = message;
  profileStatus.classList.toggle('error', isError);
  profileStatus.hidden = !message;
};
const showNote = message => { note.textContent = message; note.hidden = !message; };
const uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
const ownerId = () => mode === 'firebase' ? currentUser?.uid || '' : localUserId;
const profileName = () => profile?.displayName || 'Anonymous';
const profileAvatar = () => (typeof profile?.avatar === 'string' && profile.avatar.startsWith('data:image/jpeg;base64,')) ? profile.avatar : '';
const avatarSrc = value => (typeof value === 'string' && value.startsWith('data:image/')) ? value : DEFAULT_AVATAR;
const isOwner = item => !!ownerId() && !!item?.ownerId && item.ownerId === ownerId();
const reviewTime = value => {
  if (value && typeof value.toDate === 'function') return value.toDate();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
};
const itemDate = item => item?.createdAt || item?.date || Date.now();
const itemDateText = item => reviewTime(itemDate(item)).toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric'});
const isFakeAlishaReview = review => String(review?.authorName || review?.name || '').trim().toLowerCase() === 'alisha' && String(review?.text || '').trim().toLowerCase() === 'very good service';
const cleanReviews = reviews => Array.isArray(reviews) ? reviews.filter(r => !isFakeAlishaReview(r)) : [];
const configLooksReady = ['apiKey','authDomain','projectId','appId'].every(key => typeof CFG[key] === 'string' && CFG[key].trim() && !/PASTE_|YOUR_/i.test(CFG[key]));
const firebaseAvailable = !!(window.firebase && window.firebase.firestore && window.firebase.auth && configLooksReady);

function storeLocal() {
  try { localStorage.setItem(KEY, JSON.stringify(data)); }
  catch (error) { console.warn('Could not save feedback in this browser.', error); }
}
function storeLocalComments() {
  try { localStorage.setItem(KEY + '_comments', JSON.stringify(localComments)); }
  catch (error) { console.warn('Could not save comments in this browser.', error); }
}
function getLocalIdentity() {
  try {
    localUserId = localStorage.getItem(LOCAL_UID_KEY) || uid();
    localStorage.setItem(LOCAL_UID_KEY, localUserId);
    profile = JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null');
    // Migrate old browser-only feedback records from the earlier version.
    const previousReviews = localStorage.getItem(KEY) || localStorage.getItem('sf_reviews_v1') || '[]';
    data = cleanReviews(JSON.parse(previousReviews));
    localComments = JSON.parse(localStorage.getItem(KEY + '_comments') || '{}') || {};
    // Migrate comments from the previous local review format without changing authorship.
    data.forEach(review => {
      if (!Array.isArray(localComments[review.id])) localComments[review.id] = Array.isArray(review.comments) ? review.comments : [];
    });
  } catch (error) {
    localUserId = uid(); profile = null; data = []; localComments = {};
    console.warn('Could not restore the local anonymous profile.', error);
  }
}

function setProfileView() {
  const hasProfile = !!profile;
  identityCurrent.hidden = !hasProfile;
  reviewForm.hidden = !hasProfile;
  if (hasProfile) {
    identityAvatar.src = avatarSrc(profile.avatar);
    identityAvatar.alt = `${profileName()} profile picture`;
    identityLabel.textContent = `Posting as ${profileName()}`;
    identitySub.textContent = mode === 'firebase'
      ? 'Your anonymous profile is saved to the cloud for this browser.'
      : 'Your profile is saved in this browser only until Firebase is connected.';
    if (profileForm.hidden === false && !profileForm.dataset.editing) profileForm.hidden = true;
  } else {
    profileForm.hidden = false;
    identityCurrent.hidden = true;
    reviewForm.hidden = true;
    profileHeading.textContent = 'Set up your anonymous profile';
    profileNameInput.value = profileNameInput.value || '';
    cancelProfileButton.hidden = true;
  }
}
function openProfileEditor() {
  profileForm.dataset.editing = profile ? 'true' : '';
  profileHeading.textContent = profile ? 'Edit your anonymous profile' : 'Set up your anonymous profile';
  profileNameInput.value = profile?.displayName || '';
  selectedProfileAvatar = profile?.avatar || '';
  profileAvatarInput.value = '';
  profileAvatarPreview.src = avatarSrc(selectedProfileAvatar);
  removeProfileAvatarButton.hidden = !selectedProfileAvatar;
  cancelProfileButton.hidden = !profile;
  identityCurrent.hidden = true;
  profileForm.hidden = false;
  setProfileStatus('');
  profileNameInput.focus();
}
function resetProfileEditor() {
  profileForm.reset();
  delete profileForm.dataset.editing;
  selectedProfileAvatar = '';
  profileAvatarPreview.src = DEFAULT_AVATAR;
  removeProfileAvatarButton.hidden = true;
  setProfileStatus('');
  if (profile) {
    profileForm.hidden = true;
    identityCurrent.hidden = false;
  } else {
    profileForm.hidden = false;
    identityCurrent.hidden = true;
  }
}

function compressAvatar(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) return reject(new Error('Please choose an image file.'));
    if (file.size > 8 * 1024 * 1024) return reject(new Error('Choose an image smaller than 8 MB.'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read that image. Please try another.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('That image could not be opened. Please try another.'));
      img.onload = () => {
        const side = 128;
        const canvas = document.createElement('canvas');
        canvas.width = side; canvas.height = side;
        const ctx = canvas.getContext('2d');
        const scale = Math.max(side / img.width, side / img.height);
        const width = img.width * scale, height = img.height * scale;
        ctx.drawImage(img, (side - width) / 2, (side - height) / 2, width, height);
        const result = canvas.toDataURL('image/jpeg', 0.68);
        if (result.length > 45000) return reject(new Error('That photo is too large after compression. Please choose another image.'));
        resolve(result);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
profileAvatarInput.addEventListener('change', async () => {
  const file = profileAvatarInput.files && profileAvatarInput.files[0];
  if (!file) return;
  setProfileStatus('Preparing your profile picture…');
  try {
    selectedProfileAvatar = await compressAvatar(file);
    profileAvatarPreview.src = selectedProfileAvatar;
    removeProfileAvatarButton.hidden = false;
    setProfileStatus('Your profile picture is ready.');
  } catch (error) {
    profileAvatarInput.value = '';
    setProfileStatus(error.message || 'Could not use that image.', true);
  }
});
removeProfileAvatarButton.addEventListener('click', () => {
  selectedProfileAvatar = '';
  profileAvatarInput.value = '';
  profileAvatarPreview.src = DEFAULT_AVATAR;
  removeProfileAvatarButton.hidden = true;
  setProfileStatus('The default profile picture will be used.');
});
editProfileButton.addEventListener('click', openProfileEditor);
cancelProfileButton.addEventListener('click', resetProfileEditor);

async function saveProfile(displayName, avatar) {
  const now = Date.now();
  if (mode === 'firebase' && db && currentUser) {
    const ref = db.collection('users').doc(currentUser.uid);
    const existing = await ref.get();
    if (existing.exists) {
      await ref.update({displayName, avatar: avatar || '', updatedAt: firebase.firestore.FieldValue.serverTimestamp()});
    } else {
      await ref.set({displayName, avatar: avatar || '', createdAt: firebase.firestore.FieldValue.serverTimestamp(), updatedAt: firebase.firestore.FieldValue.serverTimestamp()});
    }
    const refreshed = await ref.get();
    profile = refreshed.data() || {displayName, avatar: avatar || ''};
  } else {
    profile = {displayName, avatar: avatar || '', createdAt: profile?.createdAt || now, updatedAt: now};
    try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); }
    catch (error) { throw new Error('This browser could not save your profile. Check its storage settings.'); }
  }
  setProfileView();
}
profileForm.addEventListener('submit', async event => {
  event.preventDefault();
  const displayName = profileNameInput.value.trim() || 'Anonymous';
  if (displayName.length > 40) { setProfileStatus('Your display name must be 40 characters or fewer.', true); return; }
  const submit = profileForm.querySelector('button[type="submit"]');
  submit.disabled = true;
  setProfileStatus('Saving your anonymous profile…');
  try {
    await saveProfile(displayName, selectedProfileAvatar);
    delete profileForm.dataset.editing;
    profileForm.hidden = true;
    identityCurrent.hidden = false;
    setProfileStatus('Your profile is saved. You can now post feedback and reply without entering your name each time.');
    setTimeout(() => { if (profileStatus.textContent.startsWith('Your profile is saved')) setProfileStatus(''); }, 4500);
    render();
  } catch (error) {
    console.error('Could not save the anonymous profile:', error);
    setProfileStatus(error?.code === 'permission-denied'
      ? 'Firebase rejected your profile. Publish the updated firestore.rules and check the Firebase setup.'
      : (error.message || 'Your profile could not be saved. Please try again.'), true);
  } finally { submit.disabled = false; }
});

function startLocalMode(message) {
  mode = 'local';
  db = null; auth = null; currentUser = null;
  getLocalIdentity();
  setProfileView();
  showNote(message || 'Cloud feedback is not connected. This demo saves your profile, feedback and comments in this browser only. Connect Firebase to share them with everyone.');
  render();
}

async function startFirebaseMode() {
  if (!firebase.apps.length) firebase.initializeApp(CFG);
  db = firebase.firestore();
  auth = firebase.auth();
  await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  // Wait for Firebase to restore its saved anonymous session before signing in.
  // Otherwise a returning visitor could accidentally receive a new identity on each visit.
  currentUser = await new Promise((resolve, reject) => {
    let unsubscribe = () => {};
    unsubscribe = auth.onAuthStateChanged(user => { unsubscribe(); resolve(user); }, error => { unsubscribe(); reject(error); });
  });
  if (!currentUser) {
    const credential = await auth.signInAnonymously();
    currentUser = credential.user || auth.currentUser;
  }
  if (!currentUser) throw new Error('Anonymous sign-in did not return a user.');
  mode = 'firebase';
  const profileDoc = await db.collection('users').doc(currentUser.uid).get();
  profile = profileDoc.exists ? profileDoc.data() : null;
  if (profile && typeof profile.displayName !== 'string') profile = null;
  setProfileView();
  showNote('');
  db.collection('reviews').onSnapshot(snapshot => {
    data = cleanReviews(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
    data.sort((a,b) => reviewTime(itemDate(b)).getTime() - reviewTime(itemDate(a)).getTime());
    watchCommentCollections();
    render();
  }, error => {
    console.error('Firebase feedback listener failed:', error);
    showNote('Could not load cloud feedback. Check your internet connection and Firebase rules.');
  });
}
function watchCommentCollections() {
  const ids = new Set(data.map(review => review.id));
  for (const [id, unsubscribe] of commentListeners) {
    if (!ids.has(id)) { unsubscribe(); commentListeners.delete(id); delete commentsByReview[id]; }
  }
  data.forEach(review => {
    if (commentListeners.has(review.id)) return;
    const unsubscribe = db.collection('reviews').doc(review.id).collection('comments').onSnapshot(snapshot => {
      commentsByReview[review.id] = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      commentsByReview[review.id].sort((a,b) => reviewTime(itemDate(a)).getTime() - reviewTime(itemDate(b)).getTime());
      render();
    }, error => console.error(`Could not load comments for feedback ${review.id}:`, error));
    commentListeners.set(review.id, unsubscribe);
  });
}

// Star picker
for (let i = 1; i <= 5; i++) {
  const button = el('button', null, '★');
  button.type = 'button';
  button.setAttribute('aria-label', `${i} star${i === 1 ? '' : 's'}`);
  button.setAttribute('aria-pressed', 'false');
  button.onclick = () => {
    rating = i;
    [...rs.children].forEach((star, index) => {
      star.classList.toggle('f', index < i);
      star.setAttribute('aria-pressed', String(index < i));
    });
  };
  rs.appendChild(button);
}
function starBar(count, small = false) {
  const stars = el('div', `stars${small ? ' sm' : ''}`);
  for (let i = 1; i <= 5; i++) stars.appendChild(el('span', i <= Number(count) ? 'f' : '', '★'));
  stars.setAttribute('aria-label', `${Number(count) || 0} out of 5 stars`);
  return stars;
}

async function addReview(review) {
  if (mode === 'firebase' && db && currentUser) {
    await db.collection('reviews').add({
      ownerId: currentUser.uid,
      authorName: profileName(),
      avatar: profileAvatar(),
      text: review.text,
      stars: review.stars,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return;
  }
  const item = {id: uid(), ownerId: localUserId, authorName: profileName(), avatar: profileAvatar(), text: review.text, stars: review.stars, createdAt: Date.now(), updatedAt: Date.now()};
  data.unshift(item); localComments[item.id] = []; storeLocal(); storeLocalComments(); render();
}
async function updateReview(review, text) {
  if (mode === 'firebase' && db) {
    await db.collection('reviews').doc(review.id).update({text, updatedAt: firebase.firestore.FieldValue.serverTimestamp()});
  } else {
    const current = data.find(item => item.id === review.id);
    if (!current || !isOwner(current)) throw new Error('You can only edit feedback posted from this browser.');
    current.text = text; current.updatedAt = Date.now(); storeLocal(); render();
  }
}
async function deleteReview(review) {
  if (!isOwner(review)) throw new Error('You can only delete feedback posted from this browser.');
  if (mode === 'firebase' && db) {
    await db.collection('reviews').doc(review.id).delete();
  } else {
    data = data.filter(item => item.id !== review.id);
    delete localComments[review.id]; storeLocal(); storeLocalComments(); render();
  }
}
async function addComment(review, text, parentId = '', replyToName = '') {
  const comment = {id: uid(), ownerId: ownerId(), authorName: profileName(), avatar: profileAvatar(), text, parentId, replyToName, createdAt: Date.now(), updatedAt: Date.now()};
  if (mode === 'firebase' && db) {
    const {id, createdAt, updatedAt, ...fields} = comment;
    await db.collection('reviews').doc(review.id).collection('comments').add({
      ...fields,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } else {
    localComments[review.id] = Array.isArray(localComments[review.id]) ? localComments[review.id] : [];
    localComments[review.id].push(comment); storeLocalComments(); render();
  }
}
async function updateComment(review, comment, text) {
  if (!isOwner(comment)) throw new Error('You can only edit replies posted from this browser.');
  if (mode === 'firebase' && db) {
    await db.collection('reviews').doc(review.id).collection('comments').doc(comment.id).update({text, updatedAt: firebase.firestore.FieldValue.serverTimestamp()});
  } else {
    const items = localComments[review.id] || [];
    const found = items.find(item => item.id === comment.id);
    if (!found) throw new Error('This reply is no longer available.');
    found.text = text; found.updatedAt = Date.now(); storeLocalComments(); render();
  }
}
async function deleteComment(review, comment) {
  if (!isOwner(comment)) throw new Error('You can only delete replies posted from this browser.');
  if (mode === 'firebase' && db) {
    await db.collection('reviews').doc(review.id).collection('comments').doc(comment.id).delete();
  } else {
    const items = localComments[review.id] || [];
    localComments[review.id] = items.filter(item => item.id !== comment.id);
    localComments[review.id].forEach(item => { if (item.parentId === comment.id) item.parentId = ''; });
    storeLocalComments(); render();
  }
}

function actionButton(label, handler, className = 'rbtn') {
  const button = el('button', className, label); button.type = 'button'; button.onclick = handler; return button;
}
function editReviewForm(review) {
  const form = el('form', 'inline-edit-form');
  const input = el('textarea'); input.rows = 3; input.maxLength = 600; input.required = true; input.value = review.text || ''; input.setAttribute('aria-label','Edit your feedback text');
  const actions = el('div','row');
  const save = el('button','btn primary sm','Save changes'); save.type = 'submit';
  const cancel = el('button','btn ghost sm','Cancel'); cancel.type = 'button'; cancel.onclick = () => render();
  actions.append(save,cancel); form.append(input,actions);
  form.addEventListener('submit',async event=>{
    event.preventDefault(); const text=input.value.trim(); if(!text)return;
    save.disabled=true;
    try { await updateReview(review,text); setStatus('Your feedback was updated.'); }
    catch(error){ setStatus(error.message || 'Could not update your feedback.',true); save.disabled=false; }
  });
  return form;
}
function editCommentForm(review, comment) {
  const form = el('form','inline-edit-form comment-edit-form');
  const input = el('textarea'); input.rows=2; input.maxLength=400; input.required=true; input.value=comment.text || ''; input.setAttribute('aria-label','Edit your comment or reply');
  const actions=el('div','row'); const save=el('button','btn primary sm','Save'); save.type='submit'; const cancel=el('button','btn ghost sm','Cancel'); cancel.type='button'; cancel.onclick=()=>render(); actions.append(save,cancel); form.append(input,actions);
  form.addEventListener('submit',async event=>{event.preventDefault();const text=input.value.trim();if(!text)return;save.disabled=true;try{await updateComment(review,comment,text);setStatus('Your comment or reply was updated.');}catch(error){setStatus(error.message||'Could not update this reply.',true);save.disabled=false;}});
  return form;
}
function commentForm(review, parentId = '', replyToName = '') {
  const form=el('form',parentId ? 'comment-form reply-compose' : 'comment-form');
  const me=el('img','avatar mini-avatar'); me.src=avatarSrc(profile?.avatar); me.alt=`${profileName()} profile picture`;
  const field=el('div','comment-compose-main');
  const input=el('textarea'); input.rows=1; input.maxLength=400; input.required=true; input.placeholder=parentId ? `Reply to ${replyToName || 'this comment'}…` : 'Write a comment…'; input.setAttribute('aria-label',input.placeholder);
  const actions=el('div','comment-compose-actions'); const submit=el('button','btn primary sm',parentId?'Reply':'Comment'); submit.type='submit';
  if(!profile){input.disabled=true;input.placeholder='Set up your anonymous profile above to comment.';submit.disabled=true;submit.title='Create your anonymous profile first.';}
  actions.append(submit); field.append(input,actions); form.append(me,field);
  form.addEventListener('submit',async event=>{
    event.preventDefault(); const text=input.value.trim(); if(!text)return; submit.disabled=true;
    try { await addComment(review,text,parentId,replyToName); setStatus(parentId?'Your reply was posted.':'Your comment was posted.'); if(mode==='local')render(); }
    catch(error){console.error('Could not post comment:',error);setStatus(error?.code==='permission-denied'?'Firebase rejected this comment. Publish the matching firestore.rules and confirm your anonymous profile was saved.':'Could not post your comment. Check your connection and Firebase setup.',true);submit.disabled=false;}
  });
  return form;
}
function renderComment(review, comment, isReply = false) {
  const article=el('article',isReply?'comment-item comment-reply':'comment-item');
  const avatar=el('img','avatar mini-avatar'); avatar.src=avatarSrc(comment.avatar); avatar.alt=`${comment.authorName || comment.name || 'Anonymous'} profile picture`;
  const body=el('div','comment-body');
  const header=el('div','comment-header'); header.append(el('strong',null,comment.authorName || comment.name || 'Anonymous'));
  const date=el('time',null,itemDateText(comment)); header.append(date);
  if(isOwner(comment)){
    const actions=el('div','post-actions');
    actions.append(actionButton('Edit',()=>{body.replaceChildren(header,editCommentForm(review,comment));}));
    actions.append(actionButton('Delete',async()=>{
      if(!confirm('Delete this comment or reply? This cannot be undone.'))return;
      try { await deleteComment(review,comment); setStatus('Your comment or reply was deleted.'); }
      catch(error){setStatus(error.message||'Could not delete this comment.',true);}
    }));
    header.append(actions);
  }
  const text=el('p','comment-text',comment.text || '');
  if(comment.updatedAt && comment.createdAt && reviewTime(comment.updatedAt).getTime()-reviewTime(comment.createdAt).getTime()>1000) text.append(el('small','edited-tag',' (edited)'));
  body.append(header,text);
  if(!isReply){
    const replyActions=el('div','comment-actions');
    let replyCompose=null;
    replyActions.append(actionButton('Reply',()=>{
      const existing=article.querySelector('.reply-compose');
      if(existing){existing.remove();return;}
      replyCompose=commentForm(review,comment.id,comment.authorName || comment.name || 'Anonymous');
      article.appendChild(replyCompose);
      const ta=replyCompose.querySelector('textarea');if(ta)ta.focus();
    }));
    body.append(replyActions);
  }
  article.append(avatar,body);
  return article;
}
function renderComments(review) {
  const section=el('div','comments-section');
  const comments=mode==='firebase' ? (commentsByReview[review.id] || []) : (localComments[review.id] || []);
  // Support old local replies for visitors upgrading from the previous version.
  const legacy=Array.isArray(review.replies)?review.replies:[];
  const heading=el('div','comments-title',`Comments${comments.length+legacy.length ? ` (${comments.length+legacy.length})` : ''}`);
  section.append(heading,commentForm(review));
  if(!comments.length && !legacy.length) return section;
  const list=el('div','comments-list');
  const ids=new Set(comments.map(c=>c.id));
  const roots=comments.filter(c=>!c.parentId || !ids.has(c.parentId));
  roots.forEach(root=>{
    list.appendChild(renderComment(review,root,false));
    comments.filter(c=>c.parentId===root.id).forEach(child=>list.appendChild(renderComment(review,child,true)));
  });
  legacy.forEach(reply=>{
    const legacyComment={...reply, authorName:reply.name||'Anonymous', parentId:'', avatar:'', ownerId:''};
    const item=el('div','comment-item legacy-comment');
    const avatar=el('img','avatar mini-avatar');avatar.src=DEFAULT_AVATAR;avatar.alt='Default profile picture';
    const body=el('div','comment-body');const header=el('div','comment-header');header.append(el('strong',null,legacyComment.authorName),el('time',null,'Previous reply'));
    body.append(header,el('p','comment-text',legacyComment.text||''));item.append(avatar,body);list.appendChild(item);
  });
  section.appendChild(list); return section;
}
function render() {
  const box=document.getElementById('reviews');
  const focused=document.activeElement;
  if (box.contains(focused) && ['TEXTAREA','INPUT'].includes(focused.tagName) && focused.value) {
    pendingRender=true; return;
  }
  box.replaceChildren();
  const visible=cleanReviews(data);
  if(!visible.length){box.appendChild(el('p','empty','No feedback yet. Be the first to share your thoughts!'));return;}
  visible.forEach(review=>{
    const card=el('article','card rev post-card');
    const top=el('div','post-top');
    const avatar=el('img','avatar post-avatar');avatar.src=avatarSrc(review.avatar);avatar.alt=`${review.authorName||review.name||'Anonymous'} profile picture`;avatar.onerror=()=>{avatar.onerror=null;avatar.src=DEFAULT_AVATAR;};
    const identity=el('div','post-author');identity.append(el('strong',null,review.authorName||review.name||'Anonymous'));
    const meta=el('div','post-meta');meta.append(el('time',null,itemDateText(review)));if(review.updatedAt && review.createdAt && review.updatedAt.toDate && review.createdAt.toDate && review.updatedAt.toDate().getTime()-review.createdAt.toDate().getTime()>1000)meta.append(el('span','edited-tag',' · edited'));
    identity.append(meta);top.append(avatar,identity);
    if(isOwner(review)){
      const actions=el('div','post-actions');
      actions.append(actionButton('Edit',()=>{content.replaceChildren(editReviewForm(review));}));
      actions.append(actionButton('Delete',async()=>{
        if(!confirm('Delete this feedback post? Its comments will no longer be shown. This cannot be undone.'))return;
        try {await deleteReview(review);setStatus('Your feedback was deleted.');}
        catch(error){setStatus(error.message||'Could not delete your feedback.',true);}
      }));
      top.append(actions);
    }
    const content=el('div','post-content');
    const text=el('p','t',review.text||'');content.append(starBar(review.stars,true),text);
    card.append(top,content,renderComments(review));box.appendChild(card);
  });
}
document.addEventListener('focusout',()=>setTimeout(()=>{if(pendingRender){pendingRender=false;render();}},0));

reviewForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const text=document.getElementById('rText').value.trim();
  if(!profile){setStatus('Set up your anonymous profile before posting.',true);return;}
  if(!text){setStatus('Please write your feedback before posting.',true);return;}
  if(!rating){setStatus('Please choose a star rating before posting.',true);return;}
  reviewSubmit.disabled=true;setStatus('Posting your feedback…');
  try{
    await addReview({text,stars:rating});reviewForm.reset();rating=0;
    [...rs.children].forEach(star=>{star.classList.remove('f');star.setAttribute('aria-pressed','false');});
    setStatus(mode==='firebase'?'Your feedback was posted. Your anonymous profile is saved for next time.':'Your feedback was saved in this browser only. Connect Firebase to share it across devices.');
  }catch(error){
    console.error('Could not post feedback:',error);
    setStatus(error?.code==='permission-denied'?'Firebase rejected this post. Publish the updated firestore.rules and ensure Anonymous sign-in is enabled.':'Your feedback could not be posted. Check your connection and Firebase setup, then try again.',true);
  }finally{reviewSubmit.disabled=false;}
});

(async function bootFeedback(){
  if(firebaseAvailable){
    try { await startFirebaseMode(); }
    catch(error){
      console.error('Firebase authentication/setup failed:',error);
      startLocalMode('Could not start the shared anonymous backend. Enable Firebase Authentication → Anonymous, publish firestore.rules, and check firebase-config.js. Feedback is temporarily saved in this browser only.');
    }
  } else {
    startLocalMode('Cloud feedback is not connected yet. Set up Firebase using SETUP.md to share anonymous profiles, feedback, comments and replies between visitors.');
  }
})();

/* ---- v3: bulb light/dark toggle ---- */
(function(){
 const root=document.documentElement,tt=document.getElementById('themeToggle');if(!tt)return;
 function setTheme(t,persist){root.dataset.theme=t;tt.setAttribute('aria-pressed',String(t==='light'));
  tt.title=t==='light'?'Switch to dark mode':'Switch to light mode';
  if(persist){try{localStorage.setItem('sf_theme',t)}catch(e){}}}
 setTheme(root.dataset.theme==='light'?'light':'dark',false);
 tt.addEventListener('click',()=>{setTheme(root.dataset.theme==='light'?'dark':'light',true);tt.classList.remove('swing');void tt.offsetWidth;tt.classList.add('swing')});
})();

/* ---- v3: reveal-on-scroll ---- */
(function(){
 if(!('IntersectionObserver' in window))return;
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(()=>{t.style.transitionDelay=''},1000)}}),{threshold:.12});
 document.querySelectorAll('.grid4>.card,.grid3>.card,.grid2>.card,.cta,.head,.intro,.shelf-text').forEach((n,i)=>{n.classList.add('rv');n.style.transitionDelay=(i%4)*70+'ms';io.observe(n)});
 addEventListener('hashchange',()=>setTimeout(()=>document.querySelectorAll('.rv:not(.in)').forEach(n=>{const r=n.getBoundingClientRect();if(r.top<innerHeight){n.classList.add('in');setTimeout(()=>{n.style.transitionDelay=''},1000)}}),60));
})();

/* ---- v4: 3D book stack ---- */
(function(){
 const st=document.getElementById('stack3d'),scene=document.getElementById('scene');if(!st)return;
 const B=[['HTML5','Semantic, accessible page structure','#e34f26',.96,-6,''],['CSS3','Flexbox, Grid, animations, responsive layouts','#1572b6',.88,12,''],['JavaScript','Interactive features and logic','#f7df1e',1,0,'#1a1a1a'],['React.js','Component-based user interfaces','#0a7ea4',.84,-14,''],['Next.js','Fast, well-structured React websites','#2b3252',.92,8,''],['Tailwind CSS','Utility-first, consistent styling','#0891b2',.86,-4,''],['Other Frontend Tech','Always learning new tools and techniques','#7c5cff',.8,14,'']];
 B.forEach((b,i)=>{const e=document.createElement('div');e.className='b3';e.tabIndex=0;e.style.cssText=`--c:${b[2]};--w:${b[3]};--o:${b[4]}px;--i:${B.length-i};`+(b[5]?`--t:${b[5]};`:'');
  e.innerHTML=`<i class="fr"><span><b>${b[0]}</b><small>${b[1]}</small></span></i><i class="bk"></i><i class="rt"></i><i class="lf"></i><i class="tp"><em>${b[0]}</em></i><i class="bt"></i>`;st.appendChild(e)});
 const bd=document.createElement('div');bd.className='b3 board';bd.innerHTML='<i class="fr"></i><i class="bk"></i><i class="rt"></i><i class="lf"></i><i class="tp"></i><i class="bt"></i>';st.appendChild(bd);
 let baseY=-27,baseX=-19,drag=null;
 const base=()=>{const m=matchMedia('(max-width:520px)').matches;baseY=m?-24:-27;baseX=-19};
 base();
 const apply=(y,x)=>{st.style.setProperty('--ry',y+'deg');st.style.setProperty('--rx',x+'deg')};
 scene.addEventListener('pointermove',e=>{
  if(drag){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.ry=Math.max(-80,Math.min(20,drag.by+dx*.4));drag.rx=Math.max(-50,Math.min(-4,drag.bx-dy*.2));apply(drag.ry,drag.rx);return}
  if(e.pointerType!=='mouse')return;
  const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  apply(baseY+x*30,baseX-y*14)});
 scene.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;drag={x:e.clientX,y:e.clientY,by:baseY,bx:baseX,ry:baseY,rx:baseX}});
 const end=()=>{if(drag){baseY=drag.ry;baseX=drag.rx;drag=null}};
 scene.addEventListener('pointerup',end);scene.addEventListener('pointercancel',end);
 scene.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){base();apply(baseY,baseX)}});
})();
