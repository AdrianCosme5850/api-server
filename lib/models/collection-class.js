'use strict';

class Collection {
    constructor(model) {
        this.model = model;
    }
    async read(id) {
        if (id){
            return await this.model.findOne({ where: {id: id}})
        } else {
            return await this.model.findAll();
            
        }
    };
    async create(json){
        return await this.model.create(json);
    }
    async update(request){
        await this.model.update(({name: request.body.name}),({where: {id: request.query.id}}))
        return await this.model.findOne({ where: {id: request.query.id}})
    }
    async delete(id){
        await this.model.destroy({where: {id: id}})
        return id + " deleted"
    }
};

module.exports = Collection;