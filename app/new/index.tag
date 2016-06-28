<startitem>
 
                <h3>
                    <span class="{ this.opts.i.glyph }"></span>&nbsp;&nbsp;&nbsp;

                    <a href='#' onClick="{ parent.actionSelected }">
                        { this.opts.i.header }
                        <br />
                    </a>
                    <small> { this.opts.i.detail }</small>
                

                </h3>


</startitem>

<index>

<workflowitem>

    <img data-name="{ this.item.Description }" style="padding:15px" /> 
                

    <a href="#" onClick="{ workFlowSelect }">
        { this.item.Description }
    </a>
        
    <script>
        
        this.on("mount",function() {            
            $(this.root).find("img").initial({charCount:2, height:50, width:50, fontSize:8 });
        });

    </script>

</workflowitem>

 

<workflows>

    <div class="row">
        <div each="{ v in myState.Workflows }" class="col-lg-12">
            <a href="#"><h3><workflowitem i="{ v }"></workflowitem></h3></a>
        </div>
    </div>
    
</workflows>

    { console.log(myState) } 

        <organizationselecttree organizations="{ myState.newActions.Organizations }">
        </organizationselecttree>



    <starttype>


          <startitem  each={ v in starttypes } i="{ v }">
          </startitem>

           
        <script>

        this.starttypes = [
        {
        checked : 'selected',
        id : 'inside',
        glyph : "glyphicon glyphicon-indent-right",
        header : "Start by Me",
        detail : " I would like to start a workflow, and have it assigned directly to myself."
        },
        {
        id : "principal",
        glyph : "glyphicon glyphicon-indent-left",
        header : "Start by Principal",
        detail : "I would like to create a link that I can give to outside principals so they could start the process on their own."
        },
        {
        id : "upload",
        glyph : "glyphicon glyphicon-upload",
        header : "Bulk Upload",
        detail : " I would like to bulk upload a file."
        },
        {
        id : "api",
        glyph : "glyphicon glyphicon-barcode",
        header : "API",
        detail : " I would like to generate an API, so they could send data directly to our system to start workflows."
        }
        ]
        

        </script>



    </starttype>

<starttype></starttype>

<workflows></workflows>


<script>
    this.mixin(new (require('./indexCode.ts')).default());
</script>

</index>