
$(document).ready(function(){
	console.log('inside jqry');
	$("#btnShowEditForm").click(function(){
		$("#editBlogForm").modal('show');
	});
	
	$("#btnUpdateBlog").click(function(){
		$("#editBlogForm").modal('hide');
	});
});
