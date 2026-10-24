<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>NEXUS-FF-BD 168 Clean No Marker</title>
<link rel="manifest" href="manifest.json">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:system-ui}
body{background:#0a0e14;color:#fff}
.card{background:#111a2a;border:1px solid #1e2d4a;border-radius:14px;padding:12px;margin:8px 0}
.inp{width:100%;padding:12px;border-radius:10px;border:1px solid #223;background:#0e1628;color:#fff;margin:6px 0;font-size:13px}
.btn{padding:12px;border-radius:12px;border:none;font-weight:800;cursor:pointer;width:100%;font-size:13px}
.btn-blue{background:#2b5cff;color:#fff}
.badge{padding:4px 9px;border-radius:20px;font-size:10px;background:#1e2d4a;color:#fff;margin:2px;border:none}
.bNav{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;bottom:0;left:0;right:0;background:#0e1628;border-top:1px solid #223;padding:8px 0;z-index:99}
.bItem{text-align:center;font-size:10px;color:#888;cursor:pointer}
.bItem.active{color:#2b5cff;font-weight:800}
.page{display:none;padding:10px;padding-bottom:85px}
.page.on{display:block}
.slot{display:inline-block;padding:5px 8px;border-radius:12px;font-size:10px;margin:3px;border:1px solid #333;background:#1a1a1a;color:#0f0}
#loginPage{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(circle at top,#1a2a4a,#0a0e14)}
.scrollBox{max-height:300px;overflow:auto}
</style>
</head>
<body>
<div id="loginPage">
<div style="width:100%;max-width:380px;text-align:center">
<div style="background:#2b5cff;width:70px;height:70px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-weight:900;font-size:22px">NX</div>
<h2>NEXUS-FF-BD<br>168 POINTS - Clean No Marker</h2>
<p style="font-size:9px;color:#888;margin:8px 0">Any Number Any Password - 50+ Infinite</p>
<input id="lNum" class="inp" placeholder="Phone Number Any">
<input id="lPass" class="inp" placeholder="Password Any">
<input id="lUid" class="inp" placeholder="Free Fire UID">
<input id="lName" class="inp" placeholder="Game Name Beautiful">
<button class="btn btn-blue" onclick="doLogin()">LOGIN</button>
<p style="font-size:8px;color:#666;margin-top:10px">Admin: 01711111111 / admin123 - 7 Tap Profile Secret</p>
</div>
</div>
<div id="app" style="display:none">
<div style="padding:12px;display:flex;justify-content:space-between;align-items:center;background:#0e1628;border-bottom:1px solid #223">
<b>NEXUS-FF-BD</b><span id="liveTime" style="font-size:10px;color:#0f0">00:00:00</span>
</div>
<div id="p-home" class="page on">
<div class="card" style="background:linear-gradient(135deg,#2b5cff,#00ff88);color:#000;text-align:center"><b>HOW TO PLAY - Real System Demo</b><br><span style="font-size:10px">Join Slot - Get Room ID Pass 5 Min Before - Open FF</span></div>
<div style="display:flex;gap:4px;flex-wrap:wrap;margin:8px 0">
<button class="badge" onclick="filterType('ALL')">ALL</button>
<button class="badge" onclick="filterType('SOLO')">SOLO</button>
<button class="badge" onclick="filterType('DUO')">DUO</button>
<button class="badge" onclick="filterType('CUSTOM')">CUSTOM</button>
<button class="badge" onclick="filterType('CS')">CS</button>
<button class="badge" onclick="filterType('LONE')">LONE WOLF</button>
</div>
<div id="homeList"></div>
<button class="btn" style="background:#222;color:#fff;margin-top:8px" onclick="loadMore()">Load More 50+ Infinite</button>
</div>
<div id="p-tournament" class="page"><h3>Tournament</h3><div id="tourList"></div></div>
<div id="p-profile" class="page">
<div class="card" style="text-align:center;border:2px solid #2b5cff" onclick="tapProfile()" id="profileCard">
<div id="mePic" style="width:50px;height:50px;border-radius:50%;background:#2b5cff;display:flex;align-items:center;justify-content:center;margin:0 auto;font-weight:900">N</div>
<b id="meName">NEXUS</b><br><span id="meNum" style="font-size:10px;color:#888"></span><br>
<span id="meBal" style="color:#0f0;font-weight:900;font-size:20px">0 Coin</span><br>
<span id="meUID" style="font-size:10px"></span>
<p style="font-size:7px;color:#555;margin-top:4px">Tap 7 Times For Admin</p>
</div><div style="padding:12px;display:flex;justify-content:space-between;align-items:center;background:#0e1628;border-bottom:1px solid #223">
<b>NEXUS-FF-BD</b><span id="liveTime" style="font-size:10px;color:#0f0">00:00:00</span>
</div>
<div id="p-home" class="page on">
<div class="card" style="background:linear-gradient(135deg,#2b5cff,#00ff88);color:#000;text-align:center"><b>HOW TO PLAY - Real System Demo</b><br><span style="font-size:10px">Join Slot - Get Room ID Pass 5 Min Before - Open FF</span></div>
<div style="display:flex;gap:4px;flex-wrap:wrap;margin:8px 0">
<button class="badge" onclick="filterType('ALL')">ALL</button>
<button class="badge" onclick="filterType('SOLO')">SOLO</button>
<button class="badge" onclick="filterType('DUO')">DUO</button>
<button class="badge" onclick="filterType('CUSTOM')">CUSTOM</button>
<button class="badge" onclick="filterType('CS')">CS</button>
<button class="badge" onclick="filterType('LONE')">LONE WOLF</button>
</div>
<div id="homeList"></div>
<button class="btn" style="background:#222;color:#fff;margin-top:8px" onclick="loadMore()">Load More 50+ Infinite</button>
</div>
<div id="p-tournament" class="page"><h3>Tournament</h3><div id="tourList"></div></div>
<div id="p-profile" class="page">
<div class="card" style="text-align:center;border:2px solid #2b5cff" onclick="tapProfile()" id="profileCard">
<div id="mePic" style="width:50px;height:50px;border-radius:50%;background:#2b5cff;display:flex;align-items:center;justify-content:center;margin:0 auto;font-weight:900">N</div>
<b id="meName">NEXUS</b><br><span id="meNum" style="font-size:10px;color:#888"></span><br>
<span id="meBal" style="color:#0f0;font-weight:900;font-size:20px">0 Coin</span><br>
<span id="meUID" style="font-size:10px"></span>
<p style="font-size:7px;color:#555;margin-top:4px">Tap 7 Times For Admin</p>
</div>
<div class="card" style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;font-size:12px">
<div><b id="statMatch">0</b><br><span style="font-size:9px">Match</span></div>
<div><b id="statWin">0</b><br><span style="font-size:9px">Win</span></div>
<div><b id="statKill">0</b><br><span style="font-size:9px">Kill</span></div>
</div>
<div class="card"><h4>UID Setup Public Show</h4><input id="uidSave" class="inp" placeholder="UID"><input id="pinSave" class="inp" placeholder="PIN"><input id="gameNameSave" class="inp" placeholder="Game Name"><button class="btn btn-blue" onclick="saveUID()">Save UID</button></div>
<div class="card"><h4>Deposit Demo - TrxID Verify Copy</h4><input id="depAmount" class="inp" type="number" placeholder="Amount"><input id="depTrx" class="inp" placeholder="TrxID 10 Digit"><button class="btn btn-blue" onclick="depReq()">Deposit Request</button><p style="font-size:8px;color:#888;margin-top:4px">Admin bKash: <span id="adminBkashShow"></span> <button class="badge" onclick="copyText('adminBkashShow')">Copy</button></p></div>
<div class="card"><h4>Withdraw Demo 50 Min 1-24h</h4><input id="withAmount" class="inp" type="number" placeholder="Min 50"><input id="withNumber" class="inp" placeholder="Number"><button class="btn btn-blue" onclick="withReq()">Withdraw</button></div>
<div class="card">Ref: <b id="refCode"></b> <button class="badge" onclick="copyRef()">Copy</button></div>
</div>
<div id="p-rules" class="page"><div class="card"><h4>Rules 15 All English - 168 Points Inside</h4><p style="font-size:11px;margin-top:8px;line-height:1.8">1. Any Number Any Password<br>2. 0.06 MB<br>3. 50+ Infinite Auto New 10 Min<br>4. Room ID Pass Only Joined 5 Min Before<br>5. Slot Tap Join Live Fill Public Show<br>6. Fee Check Balance<br>7. Single Slot No Multi Bug<br>8. Free Fire Deep Link<br>9. TOT Real Stats Banner Place MESSAGE ME MSG Keep<br>10. Profile Inside Beautiful<br>11. No 10x Text Beautiful Name<br>12. MB Required Lock<br>13. Admin 7 Tap Secret<br>14. UID Pin Game Name Public Show<br>15. Clean No Marker No Break 168 Points</p></div></div>
</div>
<div id="bottomNav" class="bNav" style="display:none">
<div class="bItem active" onclick="goPage('home')">Home</div>
<div class="bItem" onclick="goPage('tournament')">Tour</div>
<div class="bItem" onclick="goPage('profile')">Profile</div>
<div class="bItem" onclick="goPage('rules')">Rules</div>
</div><div id="floatMsg" style="position:fixed;bottom:85px;right:12px;width:50px;height:50px;background:#25D366;border-radius:50%;display:none;place-items:center;font-size:22px;z-index:150;cursor:pointer" onclick="openWhatsApp()">💬</div>
<div id="modalRoom" style="display:none;position:fixed;inset:0;background:#000d;z-index:999;align-items:center;justify-content:center"><div class="card" style="width:90%;max-width:350px"><h3>Room ID Pass Copy Only Joined</h3><p>ID: <b id="showRoomId"></b> <button class="badge" onclick="copyT('showRoomId')">Copy</button></p><p>Pass: <b id="showRoomPass"></b> <button class="badge" onclick="copyT('showRoomPass')">Copy</button></p><button class="btn btn-blue" onclick="openFF()">OPEN FREE FIRE</button><button class="btn" style="background:#222;color:#fff;margin-top:8px" onclick="closeM('modalRoom')">Close</button></div></div>
<div id="modalPop" style="display:none;position:fixed;inset:0;background:#000d;z-index:1000;align-items:center;justify-content:center"><div class="card" style="width:90%;max-width:350px;text-align:center"><h3 id="popTitle"></h3><p id="popText" style="font-size:12px;margin:8px 0"></p><img id="popImg" style="width:100%;border-radius:10px"><button class="btn btn-blue" style="margin-top:8px" onclick="closeM('modalPop')">OK</button></div></div>
<div id="adminPanel" style="display:none;position:fixed;inset:0;background:#050505;z-index:2000;overflow:auto;padding:10px">
<button class="btn" style="background:#ff3b5c;color:#fff" onclick="closeAdmin()">Close Admin</button>
<div class="card"><h3>Admin Numbers Any Number</h3><input id="aBkash" class="inp" placeholder="bKash"><input id="aNagad" class="inp" placeholder="Nagad"><button class="btn btn-blue" onclick="saveAdminNumber()">Save</button></div>
<div class="card"><h3>Add Match 50+ Infinite</h3><select id="aType" class="inp"><option>SOLO</option><option>DUO</option><option>SQUAD</option><option>CUSTOM</option><option>CS</option><option>LONE</option></select><input id="aTitle" class="inp" placeholder="Title"><input id="aPrize" class="inp" placeholder="Prize"><input id="aFee" class="inp" placeholder="Fee"><input id="aMax" class="inp" placeholder="Max 48"><input id="aRoomId" class="inp" placeholder="Room ID"><input id="aRoomPass" class="inp" placeholder="Room Pass"><button class="btn btn-blue" onclick="addMatch()">Add</button></div>
<div class="card"><h3>Popup Banner All Users</h3><input id="aPopTitle" class="inp" placeholder="Title"><textarea id="aPopText" class="inp" placeholder="Text"></textarea><input id="aPopImg" class="inp" placeholder="Image URL"><button class="btn btn-blue" onclick="savePopup()">Show Popup</button><button class="btn" style="background:#333;color:#fff;margin-top:5px" onclick="clearPopup()">Clear</button></div>
<div class="card"><h3>Deposit List</h3><div id="depList" class="scrollBox"></div></div>
<div class="card"><h3>Withdraw List</h3><div id="withList" class="scrollBox"></div></div>
<div class="card"><h3>Users Any Number Login</h3><div id="userList" class="scrollBox"></div></div>
<div class="card"><h3>Matches Room Control</h3><div id="allMatchList" class="scrollBox"></div></div>
</div>
<button id="adminBtn" style="display:none;position:fixed;top:8px;right:8px;z-index:100;background:#ff3b5c;color:#fff;border:none;padding:6px 10px;border-radius:8px;font-size:10px" onclick="openAdmin()">ADMIN</button>
<script>
const KEY='nexus_ff_bd_clean_168_v2';
let DB=JSON.parse(localStorage.getItem(KEY)||'{"users":[],"matches":[],"dep":[],"with":[],"popup":null,"adminNum":{"bkash":"01700000000","nagad":"01800000000"}}');
let CUR=null;let filter='ALL';let tapCount=0;
function save(){localStorage.setItem(KEY,JSON.stringify(DB));}
function id(){return 'id_'+Date.now()+'_'+Math.floor(Math.random()*9999);}
function tick(){let d=new Date();let el=document.getElementById('liveTime');if(el) el.innerText=d.toLocaleTimeString();}
setInterval(tick,1000);tick();
function doLogin(){let n=document.getElementById('lNum').value.trim();let p=document.getElementById('lPass').value.trim();if(!n||!p){alert('Any Number Any Password');return;}let u=DB.users.find(x=>x.num===n);if(!u){u={id:id(),num:n,pass:p,bal:405,gname:document.getElementById('lName').value||'Player-'+n.slice(-4),uid:document.getElementById('lUid').value||'',pin:'',match:0,win:0,kill:0,ref:'NEXUS-'+Math.floor(1000+Math.random()*9000)};DB.users.push(u);save();}CUR=u;if(n==='01711111111'||p==='admin123'){document.getElementById('adminBtn').style.display='block';}document.getElementById('loginPage').style.display='none';document.getElementById('app').style.display='block';document.getElementById('bottomNav').style.display='grid';document.getElementById('floatMsg').style.display='grid';loadAll();checkPopup();}
function goPage(p){document.querySelectorAll('.page').forEach(x=>x.classList.remove('on'));document.getElementById('p-'+p).classList.add('on');if(p==='profile') loadProfile();}
function closeM(i){document.getElementById(i).style.display='none';}
function filterType(t){filter=t;loadHome();}
function makeCard(x){let joined=CUR&&x.slots&&x.slots.includes(CUR.id);let col=x.type==='CUSTOM'?'#ff6a00':x.type==='CS'?'#0f0':'#2b5cff';let slotsHtml=renderSlots(x);return '<div class="card" style="border-left:4px solid '+col+'"><b>'+x.title+' - '+x.type+'</b><br><span class="badge" style="background:'+col+';color:#000">'+x.type+'</span><span class="badge">Prize '+x.prize+'</span><span class="badge">Fee '+x.fee+'</span><div style="margin-top:4px;font-size:10px;color:#0f0">'+(x.slots?x.slots.length:0)+'/'+x.max+' Joined - Live Fill</div><div style="display:flex;gap:5px;margin-top:8px"><button class="btn btn-blue" style="flex:1" onclick="joinMatch(\''+x.id+'\')">'+(joined?'JOINED':'Join Slot')+'</button><button class="btn" style="flex:1;background:#222;color:#fff" onclick="showRoom(\''+x.id+'\')">Room</button></div><div style="margin-top:5px;display:flex;flex-wrap:wrap">'+slotsHtml+'</div></div>';}
function renderSlots(x){if(!x.slots||!x.slots.length) return '<span style="font-size:8px;color:#666">No Player Yet - FREE</span>';let h='';x.slots.forEach((uid,i)=>{let u=DB.users.find(a=>a.id===uid);let name=u?(u.gname||u.num):'Player';let bg=uid===CUR?.id?'#fff':'#1a1a1a';let fg=uid===CUR?.id?'#000':'#0f0';h+='<span class="slot" style="background:'+bg+';color:'+fg+'">'+(i+1)+'. '+name+'</span>';});return h;}
function loadHome(){let h=document.getElementById('homeList');h.innerHTML='';let list=DB.matches;if(filter!=='ALL') list=list.filter(x=>x.type===filter);list=[...list].reverse().slice(0,30);if(!list.length){h.innerHTML='<div class="card" style="text-align:center">No Match - Admin Add</div>';return;}list.forEach(x=>{h.innerHTML+=makeCard(x);});}
function loadTour(){let t=document.getElementById('tourList');t.innerHTML='';[...DB.matches].reverse().forEach(x=>{t.innerHTML+=makeCard(x);});}
function joinMatch(mid){if(!CUR) return;let m=DB.matches.find(x=>x.id===mid);if(!m) return;if(m.slots&&m.slots.includes(CUR.id)){showRoom(mid);return;}if(CUR.bal<Number(m.fee)){alert('Low Balance - Deposit Demo');return;}if(m.slots&&m.slots.length>=Number(m.max)){alert('Slot Full');return;}CUR.bal-=Number(m.fee);m.slots=m.slots||[];m.slots.push(CUR.id);CUR.match++;let idx=DB.users.findIndex(u=>u.id===CUR.id);if(idx>=0) DB.users[idx]=CUR;save();loadAll();if(m.slots.length>=Math.floor(Number(m.max)*0.8)){setTimeout(()=>{autoAdd(m.type);},10000);}alert('Joined Success - Clean No Marker - All 168 Inside');}
function showRoom(mid){let m=DB.matches.find(x=>x.id===mid);if(!m) return;if(!(m.slots&&m.slots.includes(CUR.id))){alert('LOCKED - Join First - Only Joined Get Room 5 Min Before');return;}document.getElementById('showRoomId').innerText=m.roomId||'TBA';document.getElementById('showRoomPass').innerText=m.roomPass||'TBA';document.getElementById('modalRoom').style.display='flex';}
function copyT(id){navigator.clipboard.writeText(document.getElementById(id).innerText);alert('Copied');}
function depReq(){let amt=Number(document.getElementById('depAmount').value);let trx=document.getElementById('depTrx').value.trim();if(!amt||!trx){alert('Empty');return;}if(trx.length<8){alert('TrxID 10 Digit Need');return;}DB.dep.push({id:id(),uid:CUR.id,num:CUR.num,amt,trx,status:'pending',time:Date.now()});save();alert('Deposit Request Demo - No Marker Clean');}
function withReq(){let amt=Number(document.getElementById('withAmount').value);if(!amt||amt<50){alert('50 Min');return;}if(CUR.bal<amt){alert('Low');return;}DB.with.push({id:id(),uid:CUR.id,num:CUR.num,amt,status:'pending',time:Date.now()});CUR.bal-=amt;let u=DB.users.find(x=>x.id===CUR.id);if(u) u.bal=CUR.bal;save();alert('Withdraw Demo - 1-24h');}
function saveUID(){let uid=document.getElementById('uidSave').value.trim();let pin=document.getElementById('pinSave').value.trim();let g=document.getElementById('gameNameSave').value.trim();if(!uid||!pin||!g){alert('Empty');return;}CUR.uid=uid;CUR.pin=pin;CUR.gname=g;let u=DB.users.find(x=>x.id===CUR.id);if(u){u.uid=uid;u.pin=pin;u.gname=g;}save();loadProfile();alert('UID Saved Public Show Everywhere');}
function loadProfile(){if(!CUR) return;document.getElementById('meName').innerText=CUR.gname;document.getElementById('mePic').innerText=(CUR.gname||'N')[0].toUpperCase();document.getElementById('meNum').innerText=CUR.num;document.getElementById('meBal').innerText=CUR.bal+' Coin';document.getElementById('meUID').innerText='UID: '+(CUR.uid||'Empty');document.getElementById('statMatch').innerText=CUR.match||0;document.getElementById('refCode').innerText=CUR.ref;document.getElementById('adminBkashShow').innerText=DB.adminNum.bkash;}
function tapProfile(){tapCount++;if(tapCount>=7){document.getElementById('adminBtn').style.display='block';let p=prompt('Admin Password?');if(p==='admin123'){openAdmin();}tapCount=0;}}
function copyRef(){navigator.clipboard.writeText(CUR.ref);alert('Copied Ref');}
function copyText(id){navigator.clipboard.writeText(document.getElementById(id).innerText);alert('Copied');}
function openWhatsApp(){window.open('https://wa.me/8801700000000','_blank');}
function openFF(){window.location.href='intent://com.dts.freefireth#Intent;scheme=android-app;end';}
function loadAll(){loadHome();loadTour();loadProfile();}
function loadMore(){for(let i=0;i<5;i++){let types=['SOLO','DUO','SQUAD','CUSTOM','CS','LONE'];let t=types[Math.floor(Math.random()*types.length)];autoAdd(t);}loadAll();}
function autoAdd(type){let t=type||'SOLO';DB.matches.push({id:id(),type:t,title:t+' Pro Battle '+(DB.matches.length+1)+' - NEXUS Clean No Marker',prize:Math.floor(100+Math.random()*900),fee:Math.floor(10+Math.random()*50),max:48,roomId:Math.floor(1000000+Math.random()*9000000),roomPass:Math.floor(100000+Math.random()*900000),slots:[],time:Date.now()});save();}
function openAdmin(){document.getElementById('adminPanel').style.display='block';loadAdminAll();}
function closeAdmin(){document.getElementById('adminPanel').style.display='none';}
function saveAdminNumber(){let b=document.getElementById('aBkash').value;let n=document.getElementById('aNagad').value;if(b) DB.adminNum.bkash=b;if(n) DB.adminNum.nagad=n;save();loadAll();alert('Saved Any Number');}
function addMatch(){let type=document.getElementById('aType').value;let title=document.getElementById('aTitle').value||type+' Battle';let prize=document.getElementById('aPrize').value||'100';let fee=document.getElementById('aFee').value||'20';let max=document.getElementById('aMax').value||'48';let rid=document.getElementById('aRoomId').value||Math.floor(1000000+Math.random()*9000000);let rpass=document.getElementById('aRoomPass').value||Math.floor(100000+Math.random()*900000);DB.matches.push({id:id(),type,title,prize,fee,max:Number(max),roomId:rid,roomPass:rpass,slots:[],time:Date.now()});save();loadAll();loadAdminAll();alert('Match Added 50+ Infinite');}
function loadAdminAll(){let b=document.getElementById('depList');b.innerHTML='';DB.dep.slice().reverse().forEach(d=>{b.innerHTML+='<div style="padding:6px;border-bottom:1px solid #222;font-size:11px"><b>'+d.num+' - '+d.amt+' - Trx '+d.trx+'</b> '+d.status+'<br><button class="badge" style="background:#0f0;color:#000" onclick="approveDep(\''+d.id+'\')">APPROVE</button><button class="badge" style="background:#ff3b5c" onclick="rejectDep(\''+d.id+'\')">REJECT</button></div>';});let w=document.getElementById('withList');w.innerHTML='';DB.with.slice().reverse().forEach(x=>{w.innerHTML+='<div style="padding:6px;border-bottom:1px solid #222;font-size:11px"><b>'+x.num+' - '+x.amt+'</b> '+x.status+'<br><button class="badge" style="background:#0f0;color:#000" onclick="approveWith(\''+x.id+'\')">SEND</button><button class="badge" style="background:#ff3b5c" onclick="rejectWith(\''+x.id+'\')">REJECT</button></div>';});let u=document.getElementById('userList');u.innerHTML='';DB.users.slice().reverse().forEach(us=>{u.innerHTML+='<div style="padding:6px;border-bottom:1px solid #222;font-size:11px"><b>'+us.num+' - '+us.gname+' - '+us.bal+'</b><br><button class="badge" onclick="addBal(\''+us.id+'\',50)">+50</button><button class="badge" style="background:#ff3b5c" onclick="delUser(\''+us.id+'\')">DELETE</button></div>';});let m=document.getElementById('allMatchList');m.innerHTML='';DB.matches.slice().reverse().forEach(x=>{m.innerHTML+='<div style="padding:6px;border-bottom:1px solid #222;font-size:11px"><b>'+x.type+' - '+x.title+' - '+(x.slots?x.slots.length:0)+'/'+x.max+'</b><br>Room '+x.roomId+' Pass '+x.roomPass+'<br><button class="badge" onclick="editRoom(\''+x.id+'\')">Edit Room</button><button class="badge" style="background:#ff3b5c" onclick="delMatch(\''+x.id+'\')">Delete</button></div>';});}
function approveDep(id){let d=DB.dep.find(x=>x.id===id);if(!d) return;d.status='approved';let u=DB.users.find(x=>x.id===d.uid);if(u) u.bal+=Number(d.amt);save();loadAdminAll();}
function rejectDep(id){let d=DB.dep.find(x=>x.id===id);if(d){d.status='rejected';save();loadAdminAll();}}
function approveWith(id){let w=DB.with.find(x=>x.id===id);if(!w) return;w.status='approved';save();loadAdminAll();}
function rejectWith(id){let w=DB.with.find(x=>x.id===id);if(!w) return;w.status='rejected';let u=DB.users.find(x=>x.id===w.uid);if(u) u.bal+=Number(w.amt);save();loadAdminAll();}
function addBal(uid,amt){let u=DB.users.find(x=>x.id===uid);if(u){u.bal+=amt;save();loadAdminAll();if(CUR&&CUR.id===uid) loadProfile();}}
function delUser(uid){if(confirm('Delete?')){DB.users=DB.users.filter(x=>x.id!==uid);save();loadAdminAll();}}
function editRoom(mid){let m=DB.matches.find(x=>x.id===mid);if(!m) return;let nr=prompt('Room ID',m.roomId);if(nr!==null) m.roomId=nr;let np=prompt('Room Pass',m.roomPass);if(np!==null) m.roomPass=np;save();loadAdminAll();loadAll();}
function delMatch(mid){if(confirm('Delete?')){DB.matches=DB.matches.filter(x=>x.id!==mid);save();loadAll();loadAdminAll();}}
function savePopup(){let t=document.getElementById('aPopTitle').value||'Admin Message';let tx=document.getElementById('aPopText').value||'Message';let img=document.getElementById('aPopImg').value||'';DB.popup={title:t,text:tx,img,time:Date.now()};save();alert('Popup Saved All Users');}
function clearPopup(){DB.popup=null;save();alert('Cleared');}
function checkPopup(){if(DB.popup){document.getElementById('popTitle').innerText=DB.popup.title;document.getElementById('popText').innerText=DB.popup.text;let img=document.getElementById('popImg');if(img){img.src=DB.popup.img||'';}document.getElementById('modalPop').style.display='flex';}}
(function init(){if(DB.matches.length<5){for(let i=0;i<10;i++){let types=['SOLO','DUO','SQUAD','CUSTOM','CS','LONE'];autoAdd(types[i%6]);}}loadAll();if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}})();
</script>
</body>
</html>