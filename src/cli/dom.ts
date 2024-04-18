export class DOM {
  public readonly window  = {
    document: new DocumentImpl() as Document,
  }
}

class DocumentImpl {
}
