function inputFields(form){
	console.log('Script de inputFields carregado');
	
	var linhasTabelaPai = form.getChildrenIndexes("resumoProdutos");

	for(var i=0; i < linhasTabelaPai.length; i++){
		var indice = linhasTabelaPai[i];

		// Acessa os campos filhos dentro da linha atual
        var campoFilho1 = form.getField("input[id^='valorUnitario___" + indice);

        if (campoFilho1) {
            // Adiciona um listener de input ao campo filho 1
            campoFilho1.on("input", function() {
                var valorAtual = $(this).val();
                console.log("Valor atual do campo filho 1 antes da máscara: ", valorAtual);

                var valorMascarado = valorMonetario(valorAtual);
                console.log("Valor do campo filho 1 após aplicar a máscara: ", valorMascarado);

                $(this).val(valorMascarado);
            });

        }
    }
}