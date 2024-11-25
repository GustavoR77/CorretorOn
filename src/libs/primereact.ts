import {locale, addLocale} from 'primereact/api';


export const localePtBR = () => {
    addLocale('pt-br', {
        accept: 'Sim',
        reject: 'Não',
        choose: 'Escolher',
        upload: 'Upload',
        cancel: 'Cancelar',
        close: 'Fechar',
        dateBefore: 'Anterior',
        dateAfter: 'Próximo',
        startsWith: 'Começo',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        weekHeader: 'Semana',
        firstDayOfWeek: 0,
        today: 'Hoje',
        clear: 'Limpar',
        dateFormat: 'dd/mm/yy',
        weak: 'Fraco',
        medium: 'Médio',
        strong: 'Forte',
        passwordPrompt: 'Insira uma senha'
    });
    locale('pt-br');
}



