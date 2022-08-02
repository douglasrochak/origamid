// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

import initTab from "./modules/tab.js";
import initAccordionList from "./modules/accordion.js";
import initMenu from "./modules/menu.js";
import {initAnimaScroll as animaScroll} from "./modules/anima-scroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/drop-down-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import initFuncionameno from "./modules/funcionamento.js";

initTab();
initAccordionList();
initMenu();
animaScroll();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionameno();