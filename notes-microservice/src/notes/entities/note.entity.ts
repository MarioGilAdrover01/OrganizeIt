import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument = Note & Document

@Schema({ collection: "ninjas" })
export class Note {

    @Prop()
    public title: string;

    @Prop()
    public date: string;

    @Prop()
    public description: string;

    @Prop()
    public content: string;

}

export const NoteSchema = SchemaFactory.createForClass(Note)
