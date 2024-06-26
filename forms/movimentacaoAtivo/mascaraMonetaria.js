function teste(){
    $(document).ready(function() {
        $('#idmov').on('input', function() {
            let value = this.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            if (value) {
                value = (value / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });
            }
            this.value = value;
        });

        $('form').on('submit', function() {
            let valor = $('#idmov').val().replace(/[^\d,-]/g, ''); // Remove tudo que não é dígito, vírgula ou hífen
            $('#idmov').val(valor);
        });
    });
}