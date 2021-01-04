import { validate } from "./form/validate.js";
import { finalResultData } from "./form/finalResultData.js";
import { changeSection } from "./changeSection.js"
import { doSearchOnGitHubAPI } from "./github/doSearchOnGitHubAPI.js";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";


$(document).ready(function() {

    const octokit = new Octokit();
    
    const $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeOut();
    $("main").fadeIn();

    // Menu
    $("button.personal-section").click(function(){
        changeSection($(this));
    });

    // Validation 
    const $inputs = $("#form-section input");

    $inputs.blur(function() {
        const $input = $(this);
        validate($input);
    });

    // Result
    $("#form-section form").submit(function(event) {
        finalResultData(event);
    });

    // GitHub API Repo Search
    $("#github-section form").submit(function(event) {
        doSearchOnGitHubAPI(event,octokit);
    });

    // Masks
    $(".cpf").mask("000.000.000-00");
    var maskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {onKeyPress: function(val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    };
    $('.tel').mask(maskBehavior, options);
    $('.cep').mask("00000-000")
});