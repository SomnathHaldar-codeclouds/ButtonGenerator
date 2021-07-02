// let input_type = (<HTMLInputElement>document.getElementsByTagName("input"));
// button
var btn = document.getElementById("btn");
//Text
var btnInrContent = document.getElementById("btn_content");
var btnClsName = document.getElementById("btn_cls");
var font_family = document.getElementById("fontfamily");
var btnfont_size = document.getElementById("btn_font_size");
var font_Weight = document.getElementById("btn_font_bld");
var font_italic = document.getElementById("btn_font_italic");
btnInrContent.oninput = function () {
    btn.innerHTML = btnInrContent.value;
};
btnClsName.oninput = function () {
    document.querySelector("#btnClsValue").innerHTML = ".btn" + "." + btnClsName.value;
    btn.className = "btn" + " " + btnClsName.value;
};
font_family.oninput = function () {
    btn.style.fontFamily = font_family.value;
};
btnfont_size.oninput = function () {
    document.querySelector("#fontValue").innerHTML = btnfont_size.value + "px";
    btn.style.fontSize = btnfont_size.value + "px";
    // console.log(fontSize.value);
};
font_Weight.oninput = function () {
    if (font_Weight.checked == true) {
        btn.style.fontWeight = "bold";
    }
    else {
        btn.style.fontWeight = "normal";
    }
};
font_italic.oninput = function () {
    if (font_italic.checked == true) {
        btn.style.fontStyle = "italic";
    }
    else {
        btn.style.fontStyle = "normal";
    }
};
//Size
var btnVer_size = document.getElementById("btn_ver_size");
var btnHor_size = document.getElementById("btn_hor_size");
btnVer_size.oninput = function () {
    document.querySelector("#btnVerSizeVal").innerHTML = btnVer_size.value + "px";
    // btn.style.height =  btnVer_size.value +"px";
    btn.style.paddingTop = btnVer_size.value + "px";
    btn.style.paddingBottom = btnVer_size.value + "px";
};
btnHor_size.oninput = function () {
    document.querySelector("#btnHorSizeVal").innerHTML = btnHor_size.value + "px";
    btn.style.paddingLeft = btnHor_size.value + "px";
    btn.style.paddingRight = btnHor_size.value + "px";
};
//Border
var btnBrdr_radius = document.getElementById("btn_border_radius");
var btnBrdr_size = document.getElementById("btn_border_size");
btnBrdr_radius.oninput = function () {
    document.querySelector("#btnradiusVal").innerHTML = btnBrdr_radius.value + "px";
    btn.style.borderRadius = btnBrdr_radius.value + "px";
};
btnBrdr_size.oninput = function () {
    document.querySelector("#btnBrdrSizeVal").innerHTML = btnBrdr_size.value + "px";
    btn.style.borderWidth = btnBrdr_size.value + "px";
};
//Box shadow
var btn_bxshadow_colorBox = document.getElementById("btn_bxshadow_colorBox");
var boxShadowCheck = document.getElementById("boxShadow");
var boxShadowInsetCheck = document.getElementById("boxshadow_inset");
var btnBxshadow_color = document.getElementById("btn_bxshadow_color");
var btnBoxShadow_ver = document.getElementById("btn_boxShadow_ver");
var btnBoxShadow_hor = document.getElementById("btn_boxShadow_hor");
var btnBoxShadow_blur = document.getElementById("btn_boxShadow_blur");
var btnBoxShadow_spread = document.getElementById("btn_boxShadow_spread");
btnBxshadow_color.oninput = function () {
    btn.style.boxShadow = btnBxshadow_color.value;
};
boxShadowCheck.oninput = function () {
    if (boxShadowCheck.checked == true) {
        btn_bxshadow_colorBox.style.display = "inline-flex";
        document.getElementById("boxshadowStylebox").style.display = "block";
        btn.style.boxShadow = btnBoxShadow_hor.value + "px " + btnBoxShadow_ver.value + "px " + btnBoxShadow_blur.value + "px " + btnBoxShadow_spread.value + "px " + btnBxshadow_color.value;
    }
    else {
        btn_bxshadow_colorBox.style.display = "none";
        document.getElementById("boxshadowStylebox").style.display = "none";
        btn.style.boxShadow = "";
    }
};
btnBoxShadow_ver.oninput = function () {
    document.querySelector("#btn_boxShadow_verVal").innerHTML = btnBoxShadow_ver.value + "px";
    btn.style.boxShadow = btnBoxShadow_hor.value + "px " + btnBoxShadow_ver.value + "px " + btnBoxShadow_blur.value + "px " + btnBoxShadow_spread.value + "px " + btnBxshadow_color.value;
};
btnBoxShadow_hor.oninput = function () {
    document.querySelector("#btn_boxShadow_horVal").innerHTML = btnBoxShadow_hor.value + "px";
    btn.style.boxShadow = btnBoxShadow_hor.value + "px " + btnBoxShadow_ver.value + "px " + btnBoxShadow_blur.value + "px " + btnBoxShadow_spread.value + "px " + btnBxshadow_color.value;
};
btnBoxShadow_blur.oninput = function () {
    document.querySelector("#btn_boxShadow_horVal").innerHTML = btnBoxShadow_hor.value + "px";
    btn.style.boxShadow = btnBoxShadow_hor.value + "px " + btnBoxShadow_ver.value + "px " + btnBoxShadow_blur.value + "px " + btnBoxShadow_spread.value + "px " + btnBxshadow_color.value;
};
btnBoxShadow_spread.oninput = function () {
    document.querySelector("#btn_boxShadow_horVal").innerHTML = btnBoxShadow_hor.value + "px";
    btn.style.boxShadow = btnBoxShadow_hor.value + "px " + btnBoxShadow_ver.value + "px " + btnBoxShadow_blur.value + "px " + btnBoxShadow_spread.value + "px " + btnBxshadow_color.value;
};
//Text shadow
var btnTextshadow_colorBox = document.getElementById("btn_textshadow_colorBox");
var textShadowCheck = document.getElementById("textShadow");
var btnTextshadow_color = document.getElementById("btn_textshadow_color");
var btnTextshadow_ver = document.getElementById("btn_txtshadow_ver");
var btnTextshadow_hor = document.getElementById("btn_txtshadow_hor");
var btnTextShadow_blur = document.getElementById("btn_textShadow_blur");
btnTextshadow_color.oninput = function () {
    btn.style.textShadow = btnTextshadow_color.value;
};
textShadowCheck.oninput = function () {
    if (textShadowCheck.checked == true) {
        btnTextshadow_colorBox.style.display = "inline-flex";
        document.getElementById("textshadowStylebox").style.display = "block";
        btn.style.textShadow = btnTextshadow_hor.value + "px " + btnTextshadow_ver.value + "px " + btnTextShadow_blur.value + "px " + btnTextshadow_color.value;
    }
    else {
        btnTextshadow_colorBox.style.display = "none";
        document.getElementById("textshadowStylebox").style.display = "none";
        btn.style.textShadow = "";
    }
};
btnTextshadow_ver.oninput = function () {
    document.querySelector("#btn_txtshadow_verVal").innerHTML = btnTextshadow_ver.value + "px";
    btn.style.textShadow = btnTextshadow_hor.value + "px " + btnTextshadow_ver.value + "px " + btnTextShadow_blur.value + "px " + btnTextshadow_color.value;
};
btnTextshadow_hor.oninput = function () {
    document.querySelector("#btn_txtshadow_horVal").innerHTML = btnTextshadow_hor.value + "px";
    btn.style.textShadow = btnTextshadow_hor.value + "px " + btnTextshadow_ver.value + "px " + btnTextShadow_blur.value + "px " + btnTextshadow_color.value;
};
btnTextShadow_blur.oninput = function () {
    document.querySelector("#btn_textShadow_blurVal").innerHTML = btnTextShadow_blur.value + "px";
    btn.style.textShadow = btnTextshadow_hor.value + "px " + btnTextshadow_ver.value + "px " + btnTextShadow_blur.value + "px " + btnTextshadow_color.value;
};
//button color
var btnBg_color = document.getElementById("btn_bg_color");
var btnBorder_color = document.getElementById("btn_border_color");
var btnHover_color = document.getElementById("btn_hover_color");
// btn.style. = btnHover_color.value;
btnBg_color.oninput = function () {
    btn.style.backgroundColor = btnBg_color.value;
};
btnBorder_color.oninput = function () {
    btn.style.borderColor = btnBorder_color.value;
};
// label output
document.querySelector("#fontValue").innerHTML = btnfont_size.value + "px";
// document.querySelector("#btnClsValue").innerHTML = btnClsName.value;
document.querySelector("#btnVerSizeVal").innerHTML = btnVer_size.value + "px";
document.querySelector("#btnHorSizeVal").innerHTML = btnHor_size.value + "px";
document.querySelector("#btnradiusVal").innerHTML = btnBrdr_radius.value + "px";
document.querySelector("#btnBrdrSizeVal").innerHTML = btnBrdr_size.value + "px";
document.querySelector("#btn_boxShadow_verVal").innerHTML = btnBoxShadow_ver.value + "px";
document.querySelector("#btn_boxShadow_horVal").innerHTML = btnBoxShadow_hor.value + "px";
document.querySelector("#btn_boxShadow_blurVal").innerHTML = btnBoxShadow_blur.value + "px";
document.querySelector("#btn_boxShadow_spreadVal").innerHTML = btnBoxShadow_spread.value + "px";
document.querySelector("#btn_txtshadow_verVal").innerHTML = btnTextshadow_ver.value + "px";
document.querySelector("#btn_txtshadow_horVal").innerHTML = btnTextshadow_hor.value + "px";
document.querySelector("#btn_textShadow_blurVal").innerHTML = btnTextShadow_blur.value + "px";
// button style
btn.style.display = "inline-block";
btn.style.fontFamily = font_family.value;
btn.style.fontSize = btnfont_size.value + "px";
btn.style.paddingLeft = btnHor_size.value + "px";
btn.style.paddingRight = btnHor_size.value + "px";
btn.style.paddingTop = btnVer_size.value + "px";
btn.style.paddingBottom = btnVer_size.value + "px";
btn.style.borderRadius = btnBrdr_radius.value + "px";
btn.style.border = btnBrdr_size.defaultValue + "px" + " " + "solid" + btnBorder_color;
btn.style.backgroundColor = btnBg_color.value;
btn.style.borderColor = btnBorder_color.value;
btn.style.lineHeight = "1";
btn.style.color = "white";
// get code
var code_box = document.getElementById("codebox");
code_box.style.display = "none";
var getcode;
var htmlElement_code = btn.outerHTML;
// console.log(htmlElement_code)
getcode = function () {
    // return btn.getAttribute("style");
    code_box.style.display = "block";
    btnClsName.value == "" ? document.querySelector("#btnClsValue").innerHTML = ".btn" : document.querySelector("#btnClsValue").innerHTML = ".btn" + "." + btnClsName.value;
    // document.querySelector("#htmlCode").innerHTML = htmlElement_code;
    // document.querySelector("#css_style_code").innerHTML = btn.getAttribute("style");
    // for (var styleArr = 0; styleArr < htmlElement_code.length; styleArr++) {
    // 	console.log(htmlElement_code[styleArr]);
    // }
    // styleArr < btn.getAttribute("style").length ? 
    for (var styleArr = 0; styleArr < btn.style.length; styleArr++) {
        // console.log(btn.style[styleArr] + ":" + btn.style[btn.style[styleArr]]);
        document.querySelector("#css_style_code").innerHTML +=
            '<span class="CssProperty-color" id="CssProperty">' + btn.style[styleArr] + "</span>" + ": " + '<span class="CssPropertyValue-color" id="CssPropertyValue">' + btn.style[btn.style[styleArr]] + ";" + '</span>' + "<br>";
        // document.querySelector("#CssProperty").innerHTML += btn.style[styleArr] + ":";
        // document.querySelector("#CssPropertyValue").innerHTML += btn.style[btn.style[styleArr]] + ";" + "<br>";
    }
};
document.getElementById("getCode_btn").addEventListener("click", getcode);
// console.log(getcode())
// document.querySelector("#css_style_code").innerHTML = btn.getAttribute("style");
// console.log(btn.style)
// console.log(btn.style.length);
// console.log(btn.style[btn.style[0]])
