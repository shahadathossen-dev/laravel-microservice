<?php

namespace App\Filters;

class UserFilter extends Filter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As ['relationName' => ['id', 'name']].
    *
    * @var array
    */
    public $searchRelations = [];

    /**
     * Searchable columns of the table
     *
     * @var array
     */
    public $searchColumns = ['id', 'name', 'email'];

}