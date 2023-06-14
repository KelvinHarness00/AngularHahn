import { Component } from '@angular/core';

@Component({
  selector: 'app-rad-plants',
  templateUrl: './rad-plants.component.html',
  styleUrls: ['./rad-plants.component.css']
})
export class RadPlantsComponent {
  textos = [
    {
      titulo: 'Diversity',
      conteudo: 'The Amazon Rainforest is renowned for its incredible natural diversity. It is home to millions of species of plants, animals, and insects, many of which are unique to this region. From the towering canopy trees to the small creatures inhabiting the forest floor, the Amazon is a true treasure trove of biodiversity. Explore its winding trails and meandering rivers to discover the wealth of species that call the Amazon their home.'
    },
    {
      titulo: 'The Forest',
      conteudo: '​As you venture into the vastness of the Amazon Rainforest, be prepared to be awed by its grandeur and lushness. The dense, lush vegetation, the immersive sounds of birds and animals, and the humidity in the air create a magical and unique atmosphere. You can expect to encounter a variety of ecosystems, such as upland forests, flooded forests (igapós), and seasonally flooded forests (várzeas), each with their own distinct characteristics and species. Embark on thrilling trails, enjoy boat rides along winding rivers, and immerse yourself in the local indigenous culture for an unforgettable experience.'
    },
    {
      titulo: '​Preserving',
      conteudo: '​Preserving the natural beauty of the Amazon is of utmost importance for the sustainability and survival of its rich biodiversity. It is essential to adopt responsible practices to ensure the conservation of this valuable ecosystem. Raising awareness about the importance of environmental preservation, supporting local and indigenous communities, promoting sustainable tourism, and implementing conservation measures are some of the paths to protect the Amazon. Together, we can play a crucial role in maintaining this natural beauty for future generations to enjoy and appreciate.'
    }
  ];
}
