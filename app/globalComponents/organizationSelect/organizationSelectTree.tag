<organizationselecttree>


<div each="{ v in this.opts.organizations}">
    <div if="{ v.Item.Name != '***************' }">
        <h4>
            <img data-name="{ v.Item.Name }" />
            <a href="#" OnClick="{ orgSelected(v) }">{ v.Item.Name }</a>
        </h4>

    </div>

    <div style="margin-left:50px;padding:5px">
        <organizationSelectTree organizations="{ v.LstNodes }"></organizationSelectTree>
    </div>

</div>

<script>
        new require('./organizationSelectTreeCode.ts').default()
</script>

</organizationselecttree>