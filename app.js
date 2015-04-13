# Programming-AssignmentCard
Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
image:  'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/096/1fd/0c17561.jpg',
top: 0,
height: '50%',
width: '90%'
});


Titanium.UI.setBackgroundColor('#0000');


var tabGroup = Titanium.UI.createTabGroup();


var win1 = Titanium.UI.createWindow({
title:'Contact Information',
backgroundColor: '#436188'
});
var tab1 = Titanium.UI.createTab({
icon:'KS_nav_views.png',
title:'Contact Information',
window:win1
});


var label = Titanium.UI.createLabel({
color:'#000000',
text:'Dani Walker\n\nBusiness Management and Human Resources\nStudent at the University of Idaho\n\nCell:818-256-4345\nEmail:walk4593@vandals.uidaho.edu',
font:{fontSize:15,fontFamily:'Tahoma'},
textAlign:'center',
width:'90%',
top:'55%'
});


win1.add(label);


var win2 = Titanium.UI.createWindow({
title:'Personable Information',
backgroundColor: '#436188'
});
var tab2 = Titanium.UI.createTab({
icon:'KS_nav_views.png',
title:'Personable Information',
window:win2
});


var label2 = Titanium.UI.createLabel({
color:'#000000',
text:'Live in Northern Idaho\nCurrently pursuing a Degree in Business Management and Human Resources\n\nCurrent Employer:University of Idaho Ticket Office\n\nSkills Summary:\nDetail Oriented\nProficient in Microsoft Office\nAmbitious self starter\nStrong communication skills\nStrong time management skills\nHard working and Passionate',
font:{fontSize:20,fontFamily:'Tahoma'},
textAlign:'center',
width:'90%'
});


win2.add(label2);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
win1.add(image);
