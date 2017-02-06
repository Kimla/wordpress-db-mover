document.getElementById("generate").addEventListener("click", createSqlCode);

function createSqlCode() {
    var oldUrl = getValueWithoutWhiteSpace(document.getElementById("old-url"));
    var newUrl = getValueWithoutWhiteSpace(document.getElementById("new-url"));
    var tablePrefix = getValueWithoutWhiteSpace(document.getElementById("table-prefix"));
    var resultContainer = document.getElementById("result");

    var sqlCode =
    "<pre>" +
        "UPDATE "+tablePrefix+"options SET option_value = replace(option_value, '"+oldUrl+"', '"+newUrl+"') WHERE option_name = 'home' OR option_name = 'siteurl' OR option_name = 'favicon' OR option_name = 'background_login' OR option_name = 'logo_login';</br></br>" +
        "UPDATE "+tablePrefix+"posts SET guid = replace(guid, '"+oldUrl+"','"+newUrl+"');</br></br>" +
        "UPDATE "+tablePrefix+"posts SET post_content = replace(post_content, '"+oldUrl+"', '"+newUrl+"');</br></br>" +
        "UPDATE "+tablePrefix+"postmeta SET meta_value = replace(meta_value,'"+oldUrl+"','"+newUrl+"');" +
    "</pre>";

    resultContainer.innerHTML = sqlCode;
}

function getValueWithoutWhiteSpace(el) {
    el.value = el.value.replace(/\s/g,'');
    return el.value;
}
