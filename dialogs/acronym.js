(function() {
	var acronym = function(editor) {
		return {
			title: 'Add acronym',
			minWidth: 300,
			minHeight: 100,
			buttons: [ CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton ],
			onOk: function() {
				var acronymText = this.getValueOf('general', 'acronymText');
				var acronymTitle = this.getValueOf('general', 'acronymTitle');
				editor.insertHtml('<acronym title="' + acronymTitle + '">' + acronymText + '</acronym>');
			},
			onLoad: function() {
				dialog = this; 
				this.setupContent();
			},
			onShow: function() {},
			onHide: function() {},
			onCancel: function() {},
			resizable: CKEDITOR.DIALOG_RESIZE_NONE,
			contents: [{
				id: 'general',
				label: 'General',
				accessKey: 'G',
				elements: [{
					type: 'vbox',
					children: [{
						type: 'text',
						id: 'acronymText',
						label: 'Acronym',
						labelLayout: 'horizontal',
						validate: CKEDITOR.dialog.validate.notEmpty('You did not fill in an acronym!')
					},{
						type: 'text',
						id: 'acronymTitle',
						label: 'Definition',
						labelLayout: 'horizontal',
						validate: CKEDITOR.dialog.validate.notEmpty('You did not fill in a definition!'),
						onCommit: function() {
							
						}
					}]
				}]
			}]
		}
	}
	
	CKEDITOR.dialog.add('acronym', function(editor) {
		return acronym(editor);
	});
})();