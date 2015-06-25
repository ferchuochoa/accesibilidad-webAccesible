$(document).ready(function() {	

	$("#validador").on('click',function() {
		// elimina el dialogo anterior (si existe) para no mandarlo a validar		
		$('#dialog').remove();
		
		// crea el iframe al final del body
		var html = 'https://validator.w3.org/check?fragment='+escape('<!DOCTYPE html>'+'<htmllang="es">'+$('html').html()+"</html>");
		$('body').append('<div id="dialog"><iframe width="99%" height="97%" src="'+html+'"></iframe></div>');
		
		// levanta el iframe como dialogo
		$('#dialog').dialog({
			title: 'Informe de Accesibilidad',
			width: 800,
			height: 500,
			resizable: false

		});
		
		
	})

})

