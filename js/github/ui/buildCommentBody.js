export const buildCommentBody = body => {
    let textLines = body.split(/\n/);

    textLines.forEach(function(textLine,number){

        let h2Position = textLine.search("## ");
        let h3Position = textLine.search("###");
        let commentPosition = textLine.search("<!--");
        let citationPosition = textLine.search("```");

        if (h3Position != -1) {
            textLines[number] = "<h5>"+textLine.substring(4)+"</h5>";

        } else if (h2Position != -1) {
            textLines[number] = "<h4>"+textLine.substring(3)+"</h4>";

        } else if (textLine.length <= 1 || commentPosition != -1 || citationPosition != -1) {
            textLines[number] = null;

        } else {
            textLine = textLine.replace(/([^*]*)\**([^*]*)\**([^*]*)/, "$1<b>$2</b>$3");
            textLines[number] = "<p>"+textLine+"</p>";
        }
        
    });
    
    return textLines;
}