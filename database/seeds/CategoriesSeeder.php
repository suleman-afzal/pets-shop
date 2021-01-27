<?php

use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        App\Category::truncate();
        DB::table('categories')->insert([
            [
                'title' => 'Pets',
                'slug'=> 'pets',
                'description' => 'xyz',
                'parent_id'=> 0,
                'level' => 1
            ],
            [
                'title' => 'Food',
                'slug'=> 'food',
                'description' => 'xyz',
                'parent_id'=> 0,
                'level' => 1
            ],
            [
                'title' => 'Accessories',
                'slug'=> 'accessories',
                'description' => 'xyz',
                'parent_id'=> 0,
                'level' => 1
            ],
            [
                'title' => 'Medical Consultancy',
                'slug'=> 'medical',
                'description' => 'xyz',
                'parent_id'=> 0,
                'level' => 1
            ],
            [
                'title' => 'Cats',
                'slug'=> 'pets-cats',
                'description' => 'xyz',
                'parent_id'=> 1,
                'level' => 2
            ],
            [
                'title' => 'Dogs',
                'slug'=> 'pets-dogs',
                'description' => 'xyz',
                'parent_id'=> 1,
                'level' => 2
            ],
            [
                'title' => 'Birds',
                'slug'=> 'pets-birds',
                'description' => 'xyz',
                'parent_id'=> 1,
                'level' => 2
            ],
            [
                'title' => 'Persian',
                'slug'=> 'pets-cats-persian',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Siamese',
                'slug'=> 'pets-cats-siamese',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Maine Coon',
                'slug'=> 'pets-cats-maine_coon',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Ragdoll',
                'slug'=> 'pets-cats-ragdoll',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Bengal',
                'slug'=> 'pets-cats-bengal',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Birman',
                'slug'=> 'pets-cats-birman',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'American Shorthair',
                'slug'=> 'pets-cats-american_shorthair',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Others',
                'slug'=> 'pets-cats-others',
                'description' => 'xyz',
                'parent_id'=> 5,
                'level' => 3
            ],
            [
                'title' => 'Labrador',
                'slug'=> 'pets-dogs-labrador',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'German Shepherd',
                'slug'=> 'pets-dogs-german_shepherd',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Bulldog',
                'slug'=> 'pets-dogs-bulldog',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Rottweiler',
                'slug'=> 'pets-dogs-rottweiler',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Pointer',
                'slug'=> 'pets-dogs-pointer',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Siberian Husky',
                'slug'=> 'pets-dogs-siberian_husky',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Doberman Pinscher',
                'slug'=> 'pets-dogs-doberman_pinscher',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Others',
                'slug'=> 'pets-dogs-others',
                'description' => 'xyz',
                'parent_id'=> 6,
                'level' => 3
            ],
            [
                'title' => 'Canaries',
                'slug'=> 'pets-birds-canaries',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Finches',
                'slug'=> 'pets-birds-finches',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Budgerigars',
                'slug'=> 'pets-birds-budgerigars',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'African Grey Parrot',
                'slug'=> 'pets-birds-african_grey_parrot',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Cockatiel',
                'slug'=> 'pets-birds-cockatiel',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Lovebird',
                'slug'=> 'pets-birds-lovebird',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Dove',
                'slug'=> 'pets-birds-dove',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Others',
                'slug'=> 'pets-birds-others',
                'description' => 'xyz',
                'parent_id'=> 7,
                'level' => 3
            ],
            [
                'title' => 'Fish',
                'slug'=> 'pets-fish',
                'description' => 'xyz',
                'parent_id'=> 1,
                'level' => 2
            ],
            [
                'title' => 'Goldfish',
                'slug'=> 'pets-fish-goldfish',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Angelfish',
                'slug'=> 'pets-fish-angelfish',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Guppies',
                'slug'=> 'pets-fish-guppies',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Mollies',
                'slug'=> 'pets-fish-mollies',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Neon Tetras',
                'slug'=> 'pets-fish-neon_tetras',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Platies',
                'slug'=> 'pets-fish-platies',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Swordtail',
                'slug'=> 'pets-fish-swordtail',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Others',
                'slug'=> 'pets-fish-others',
                'description' => 'xyz',
                'parent_id'=> 32,
                'level' => 3
            ],
            [
                'title' => 'Cats Food',
                'slug'=> 'food-cats_food',
                'description' => 'xyz',
                'parent_id'=> 2,
                'level' => 2
            ],
            [
                'title' => 'Dogs Food',
                'slug'=> 'food-dogs_food',
                'description' => 'xyz',
                'parent_id'=> 2,
                'level' => 2
            ],
            [
                'title' => 'Birds Food',
                'slug'=> 'food-birds_food',
                'description' => 'xyz',
                'parent_id'=> 2,
                'level' => 2
            ],[
                'title' => 'Fish Food',
                'slug'=> 'food-fish_food',
                'description' => 'xyz',
                'parent_id'=> 2,
                'level' => 2
            ],
            [
                'title' => 'Wet Food',
                'slug'=> 'food-cats-wet_food',
                'description' => 'xyz',
                'parent_id'=> 41,
                'level' => 3
            ],
            [
                'title' => 'Canned Food',
                'slug'=> 'food-cats-canned_food',
                'description' => 'xyz',
                'parent_id'=> 41,
                'level' => 3
            ],
            [
                'title' => 'Milk Replacer',
                'slug'=> 'food-cats-milk_replacer',
                'description' => 'xyz',
                'parent_id'=> 41,
                'level' => 3
            ],
            [
                'title' => 'Veterinary Diet',
                'slug'=> 'food-cats-veterinary_diet',
                'description' => 'xyz',
                'parent_id'=> 41,
                'level' => 3
            ],
            [
                'title' => 'Wet Food',
                'slug'=> 'food-dogs-wet_food',
                'description' => 'xyz',
                'parent_id'=> 42,
                'level' => 3
            ],
            [
                'title' => 'Canned Food',
                'slug'=> 'food-dogs-canned_food',
                'description' => 'xyz',
                'parent_id'=> 42,
                'level' => 3
            ],
            [
                'title' => 'Milk Replacer',
                'slug'=> 'food-dogs-milk_replacer',
                'description' => 'xyz',
                'parent_id'=> 42,
                'level' => 3
            ],
            [
                'title' => 'Veterinary Diet',
                'slug'=> 'food-dogs-veterinary_diet',
                'description' => 'xyz',
                'parent_id'=> 42,
                'level' => 3
            ],
            [
                'title' => 'Dental Chew',
                'slug'=> 'food-dogs-dental_chew',
                'description' => 'xyz',
                'parent_id'=> 42,
                'level' => 3
            ],
            [
                'title' => 'Sunflower Seeds',
                'slug'=> 'food-birds-sunflower_seeds',
                'description' => 'xyz',
                'parent_id'=> 43,
                'level' => 3
            ],
            [
                'title' => 'Aquarium Fish Food',
                'slug'=> 'food-fish-aquarium_fish_food',
                'description' => 'xyz',
                'parent_id'=> 44,
                'level' => 3
            ],
            [
                'title' => 'Cats Accessories',
                'slug'=> 'accessories-cats',
                'description' => 'xyz',
                'parent_id'=> 3,
                'level' => 2
            ],
            [
                'title' => 'Dogs Accessories',  //57
                'slug'=> 'accessories-dogs',
                'description' => 'xyz',
                'parent_id'=> 3,
                'level' => 2
            ],
            [
                'title' => 'Birds Accessories', //58
                'slug'=> 'accessories-birds',
                'description' => 'xyz',
                'parent_id'=> 3,
                'level' => 2
            ],
            [
                'title' => 'Fish Accessories', //59
                'slug'=> 'accessories-fish',
                'description' => 'xyz',
                'parent_id'=> 3,
                'level' => 2
            ],
            [
                'title' => 'Bowls',
                'slug'=> 'accessories-cats-bowls',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Toys',
                'slug'=> 'accessories-cats-toys',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Carriers',
                'slug'=> 'accessories-cats-carriers',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Collars',
                'slug'=> 'accessories-cats-collars',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Water Dispenser',
                'slug'=> 'accessories-cats-water_dispenser',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Trimmer',
                'slug'=> 'accessories-cats-trimmer',
                'description' => 'xyz',
                'parent_id'=> 56,
                'level' => 3
            ],
            [
                'title' => 'Bowls',
                'slug'=> 'accessories-dogs-bowls',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],

            [
                'title' => 'Toys',
                'slug'=> 'accessories-dogs-toys',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],
            [
                'title' => 'Carriers',
                'slug'=> 'accessories-dogs-carriers',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],
            [
                'title' => 'Collars',
                'slug'=> 'accessories-dogs-collars',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],
            [
                'title' => 'Water Dispenser',
                'slug'=> 'accessories-dogs-water_dispenser',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],
            [
                'title' => 'Trimmer',
                'slug'=> 'accessories-dogs-trimmer',
                'description' => 'xyz',
                'parent_id'=> 57,
                'level' => 3
            ],
            [
                'title' => 'Cages',
                'slug'=> 'accessories-product-cages',
                'description' => 'xyz',
                'parent_id'=> 58,
                'level' => 3
            ],
            [
                'title' => 'Seed Hopper',
                'slug'=> 'accessories-product-seed_hopper',
                'description' => 'xyz',
                'parent_id'=> 58,
                'level' => 3
            ],
            [
                'title' => 'Aquariums',
                'slug'=> 'accessories-product-aquariums',
                'description' => 'xyz',
                'parent_id'=> 59,
                'level' => 3
            ],
            [
                'title' => 'Aquarium Stand ',
                'slug'=> 'accessories-product-aquarium_stand',
                'description' => 'xyz',
                'parent_id'=> 59,
                'level' => 3
            ],
            [
                'title' => 'Catching Net',
                'slug'=> 'accessories-product-catching_net',
                'description' => 'xyz',
                'parent_id'=> 59,
                'level' => 3
            ],
            [
                'title' => 'Air & Water Pump',
                'slug'=> 'accessories-product-air&water_pump',
                'description' => 'xyz',
                'parent_id'=> 59,
                'level' => 3
            ],
            [
                'title' => 'Filters',
                'slug'=> 'accessories-product-filters',
                'description' => 'xyz',
                'parent_id'=> 59,
                'level' => 3
            ]



        ]);
    }
}
